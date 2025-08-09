import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Simulacros from "./pages/Simulacros"
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/simulacros" element={<Simulacros/>}/>
      </Routes>
    </BrowserRouter>
  )
}
