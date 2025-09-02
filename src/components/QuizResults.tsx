// QuizResults.tsx
import React from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import type { Question, QuizResult } from "../types/quiz";



interface QuizResultsProps {
  preguntas: Question[];
  quizResults: QuizResult[];
  selectedAnswers: number[];
  resetQuiz: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  preguntas,
  quizResults,
  selectedAnswers,
  resetQuiz,
}) => {
  const latestResult = quizResults[quizResults.length - 1];

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 80)
      return <Trophy className="w-8 h-8 text-yellow-500" />;
    if (percentage >= 60)
      return <CheckCircle className="w-8 h-8 text-green-500" />;
    return <XCircle className="w-8 h-8 text-red-500" />;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white pt-32">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 text-center mb-8">
        <div className="flex justify-center mb-4">
          {getScoreIcon(latestResult.percentage)}
        </div>
        <h2 className="text-3xl font-bold mb-4">¡Cuestionario Completado!</h2>
        <div className="text-6xl font-bold mb-2">
          {latestResult.percentage}%
        </div>
        <p className="text-xl">
          {latestResult.score} de {latestResult.totalQuestions} respuestas
          correctas
        </p>
      </div>

      {/* Revisión de respuestas */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Revisión de Respuestas
        </h3>
        <div className="space-y-6">
          {preguntas.map((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            return (
              <div
                key={question.id}
                className="border rounded-lg p-4 bg-white"
              >
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {index + 1}. {question.question}
                    </h4>
                    <div className="space-y-1">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded text-sm ${
                            optionIndex === question.correctAnswer
                              ? "bg-green-100 text-green-800 font-medium"
                              : optionIndex === userAnswer && !isCorrect
                              ? "bg-red-100 text-red-800"
                              : "text-gray-600"
                          }`}
                        >
                          {String.fromCharCode(65 + optionIndex)}. {option}
                          {optionIndex === question.correctAnswer &&
                            " ✓ (Correcta)"}
                          {optionIndex === userAnswer &&
                            !isCorrect &&
                            " ✗ (Tu respuesta)"}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Historial */}
      {quizResults.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Historial de Resultados
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Fecha</th>
                  <th className="text-center py-2">Puntuación</th>
                  <th className="text-center py-2">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {quizResults
                  .slice(-10)
                  .reverse()
                  .map((result, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{result.date}</td>
                      <td className="text-center py-2">
                        {result.score}/{result.totalQuestions}
                      </td>
                      <td
                        className={`text-center py-2 font-semibold ${getScoreColor(
                          result.percentage
                        )}`}
                      >
                        {result.percentage}%
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <button
        onClick={resetQuiz}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mx-auto"
      >
        <RotateCcw className="w-4 h-4" />
        Hacer Cuestionario Nuevamente
      </button>
    </div>
  );
};

export default QuizResults;
