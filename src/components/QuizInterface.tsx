import React, { useState, useEffect } from "react";
import QuizResults from "./QuizResults";
import type { Question, QuizResult } from "../types/quiz";

interface QuizInterfaceProps {
  preguntas: Question[];
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ preguntas }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const savedResults = localStorage.getItem("quizResults");
    if (savedResults) {
      setQuizResults(JSON.parse(savedResults));
    }
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < preguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.filter(
      (answer, index) => answer === preguntas[index].correctAnswer
    ).length;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    const percentage = Math.round((score / preguntas.length) * 100);

    const result: QuizResult = {
      score,
      totalQuestions: preguntas.length,
      percentage,
      date: new Date().toLocaleString("es-ES"),
      answers: selectedAnswers,
    };

    const newResults = [...quizResults, result];
    setQuizResults(newResults);
    localStorage.setItem("quizResults", JSON.stringify(newResults));

    setShowResults(true);
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setIsSubmitted(false);
  };

  const isQuizComplete =
    selectedAnswers.length === preguntas.length &&
    selectedAnswers.every((answer) => answer !== undefined);

  if (showResults) {
    return (
      <QuizResults
        preguntas={preguntas}
        quizResults={quizResults}
        selectedAnswers={selectedAnswers}
        resetQuiz={resetQuiz}
      />
    );
  }

  const question = preguntas[currentQuestion];
  const progress = ((currentQuestion + 1) / preguntas.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Cuestionario de Conocimientos
        </h1>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-600 mt-2">
          Pregunta {currentQuestion + 1} de {preguntas.length}
        </p>
      </div>

      {/* Question */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {question.question}
        </h2>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
              } ${
                isSubmitted ? "cursor-not-allowed opacity-60" : "cursor-pointer"
              }`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
        >
          Anterior
        </button>

        <span className="text-gray-600">
          {
            selectedAnswers.filter((answer) => answer !== undefined).length
          }{" "}
          de {preguntas.length} respondidas
        </span>

        <button
          onClick={handleNext}
          disabled={currentQuestion === preguntas.length - 1}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
        >
          Siguiente
        </button>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!isQuizComplete || isSubmitted}
          className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
        >
          {isSubmitted ? "Cuestionario Enviado" : "Enviar Cuestionario"}
        </button>

        {!isQuizComplete && (
          <p className="text-red-500 text-sm mt-2">
            Por favor responde todas las preguntas antes de enviar
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizInterface;
