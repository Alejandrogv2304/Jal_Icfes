import { useState } from "react"
import { COLORS } from "../utils/styles";

 const messages = [
        'Ingresa a la página de inicio ⚛️',
        'Dirigete a la sección de Areas y revisa 💼',
        'Preparate con el contenido disponible 🫡',
        'Prueba tus conocimientos en simulacros🤑',
      ];

export default function Funcionamiento() {
    const [step, setStep] = useState(1);

    function HandlePrevious(){
  setStep(prev => Math.max(prev - 1, 1));
 }

 function HandleNext(){
 setStep(prev => Math.min(prev + 1, 4));
 }

 
  return (
    <>
    <div className={`${COLORS["primary"]} text-center pt-8 pb-8`}>
  <h1 className={`text-3xl md:text-5xl font-bold ${COLORS["text_basic"]}`}>
    ¿Cómo funciona nuestra página?
  </h1>

  <div className="place-items-center text-black relative px-4"> {/* Padding horizontal en móvil */}

    <div className="w-full max-w-[600px] bg-[#f7f7f7] rounded-[7px] px-6 sm:px-[40px] md:px-[60px] lg:px-[100px] py-[25px] my-[50px] mx-auto">
      
      <div className="flex justify-between flex-wrap gap-4">
        <div className={step >= 1
          ? `${COLORS["secundary"]} text-white h-10 aspect-square rounded-full flex items-center justify-center text-[18px]`
          : "h-10 aspect-square bg-[#e7e7e7] rounded-full flex items-center justify-center text-[18px]"}>
          1
        </div>
        <div className={step >= 2
          ? `${COLORS["secundary"]} text-white h-10 aspect-square rounded-full flex items-center justify-center text-[18px]`
          : "h-10 aspect-square bg-[#e7e7e7] rounded-full flex items-center justify-center text-[18px]"}>
          2
        </div>
        <div className={step >= 3
          ? `${COLORS["secundary"]} text-white h-10 aspect-square rounded-full flex items-center justify-center text-[18px]`
          : "h-10 aspect-square bg-[#e7e7e7] rounded-full flex items-center justify-center text-[18px]"}>
          3
        </div>
        <div className={step >= 4
          ? `${COLORS["secundary"]} text-white h-10 aspect-square rounded-full flex items-center justify-center text-[18px]`
          : "h-10 aspect-square bg-[#e7e7e7] rounded-full flex items-center justify-center text-[18px]"}>
          4
        </div>
      </div>

      <p className="text-center text-[18px] sm:text-[20px] my-10 font-bold flex flex-col items-center">
        Paso {step}: {messages[step - 1]}
      </p>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <button
          className={`w-full sm:w-auto border-0 cursor-pointer px-[15px] py-[10px] rounded-full text-[14px] font-bold flex items-center justify-center gap-[10px] ${COLORS["secundary"]} text-white`}
          onClick={HandlePrevious}
        >
          Anterior
        </button>
        <button
          className={`w-full sm:w-auto border-0 cursor-pointer px-[15px] py-[10px] rounded-full text-[14px] font-bold flex items-center justify-center gap-[10px] ${COLORS["secundary"]} text-white`}
          onClick={HandleNext}
        >
          Siguiente
        </button>
      </div>

    </div>
  </div>
</div>
</>
  )
}
