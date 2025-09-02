import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Simulacros from "./pages/Simulacros"
import QuizPage from "./pages/QuizPage"
import { preguntas as MathQuestions} from "./data/Math.ts"
import { preguntas as SocialesQuestions} from "./data/Sociales.ts"
import { preguntas as EnglishQuestions} from "./data/English.ts"
import { preguntas as ScienceQuestions} from "./data/Science.ts"
import { preguntas as ReadingQuestions} from "./data/Reading.ts"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/simulacros" element={<Simulacros/>}/>
        <Route path="/simulacros/matematicas" element={<QuizPage preguntas={MathQuestions}/>}/>
        <Route path="/simulacros/ingles" element={<QuizPage preguntas={EnglishQuestions}/>}/>
        <Route path="/simulacros/naturales" element={<QuizPage preguntas={ScienceQuestions}/>}/>
        <Route path="/simulacros/sociales" element={<QuizPage preguntas={SocialesQuestions}/>}/>
        <Route path="/simulacros/lectura" element={<QuizPage preguntas={ReadingQuestions}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
