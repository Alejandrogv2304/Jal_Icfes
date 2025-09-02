import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import type { Question } from "../types/quiz";
import QuizInterface from "../components/QuizInterface";

interface QuizPageProps {
  preguntas: Question[];
}
const QuizPage: React.FC<QuizPageProps> = ({ preguntas }) => {
  return (
    <>
      <Navbar />
      <QuizInterface preguntas={preguntas} />
      <Footer />
    </>
  );
};

export default QuizPage;