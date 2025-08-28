import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { preguntas as Questions} from '../data/Math_Preguntas';

// Tipos TypeScript
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  date: string;
  answers: number[];
}

// Datos de ejemplo
const preguntas: Question[] = Questions;
const QuizInterface: React.FC = () => {
  //Controlamos que pregunta se esta mostrando
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  // Almacena las respuestas seleccionadas por el usuario
  // Cada índice corresponde a una pregunta, el valor es el índice de la opción elegida
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
   // Controla si se están mostrando los resultados finales (true) o el cuestionario (false)
  const [showResults, setShowResults] = useState<boolean>(false);
   // Almacena el historial de todos los resultados del usuario
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  // Indica si el cuestionario ya fue enviado (para deshabilitar cambios)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Simular localStorage con state (en tu proyecto real, usa localStorage)
  useEffect(() => {
    // En tu proyecto real, reemplaza esto con:
     const savedResults = localStorage.getItem('quizResults');
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

  //Manejador para avanzar a la siguiente pregunta a menos que sea la última
  const handleNext = () => {
    if (currentQuestion < preguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  //Manejador para retroceder a la pregunta anterior a menos que sea la primera
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === preguntas[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    const percentage = Math.round((score / preguntas.length) * 100);
   
    // Crea un objeto con los resultados de este intento
    const result: QuizResult = {
      score,
      totalQuestions: preguntas.length,
      percentage,
      date: new Date().toLocaleString('es-ES'),
      answers: selectedAnswers
    };

    //Se agrega el nuevo resultado al historial
    const newResults = [...quizResults, result];
    setQuizResults(newResults);
    
    //Guardo en local storaage
     localStorage.setItem('quizResults', JSON.stringify(newResults));
    
    setShowResults(true);
    setIsSubmitted(true);
  };

  //Reseteamos los manejadores en el quiz para volverlo a hacer
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setIsSubmitted(false);
  };

  const isQuizComplete = selectedAnswers.length === preguntas.length && 
                        selectedAnswers.every(answer => answer !== undefined);

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 80) return <Trophy className="w-8 h-8 text-yellow-500" />;
    if (percentage >= 60) return <CheckCircle className="w-8 h-8 text-green-500" />;
    return <XCircle className="w-8 h-8 text-red-500" />;
  };

  //Renderizado condicional para los resultados
  if (showResults) {
    const latestResult = quizResults[quizResults.length - 1];
    
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8 text-center mb-8">
          <div className="flex justify-center mb-4">
            {getScoreIcon(latestResult.percentage)}
          </div>
          <h2 className="text-3xl font-bold mb-4">¡Cuestionario Completado!</h2>
          <div className="text-6xl font-bold mb-2">{latestResult.percentage}%</div>
          <p className="text-xl">
            {latestResult.score} de {latestResult.totalQuestions} respuestas correctas
          </p>
        </div>

        {/* Revisión de respuestas */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Revisión de Respuestas</h3>
          <div className="space-y-6">
            {preguntas.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4 bg-white">
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
                                ? 'bg-green-100 text-green-800 font-medium'
                                : optionIndex === userAnswer && !isCorrect
                                ? 'bg-red-100 text-red-800'
                                : 'text-gray-600'
                            }`}
                          >
                            {String.fromCharCode(65 + optionIndex)}. {option}
                            {optionIndex === question.correctAnswer && ' ✓ (Correcta)'}
                            {optionIndex === userAnswer && !isCorrect && ' ✗ (Tu respuesta)'}
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

        {/* Historial de resultados */}
        {quizResults.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Historial de Resultados</h3>
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
                  {quizResults.slice(-10).reverse().map((result, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{result.date}</td>
                      <td className="text-center py-2">
                        {result.score}/{result.totalQuestions}
                      </td>
                      <td className={`text-center py-2 font-semibold ${getScoreColor(result.percentage)}`}>
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
  }

  const question = preguntas[currentQuestion];
  const progress = ((currentQuestion + 1) / preguntas.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Cuestionario de Conocimientos</h1>
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
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              } ${isSubmitted ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
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
          {selectedAnswers.filter(answer => answer !== undefined).length} de {preguntas.length} respondidas
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
          {isSubmitted ? 'Cuestionario Enviado' : 'Enviar Cuestionario'}
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