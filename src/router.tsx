import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Simulacros from "./pages/Simulacros"
import QuizPage from "./pages/QuizPage"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/simulacros" element={<Simulacros/>}/>
        <Route path="/simulacros/matematicas" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
