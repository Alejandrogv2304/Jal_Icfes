import { COLORS } from '../utils/styles';
export default function HeroInicio() {
  return (
    <>
    <div className={`${COLORS["primary"]} h-72 w-full mt-24 p-4 flex flex-col items-center gap-y-4 relative`}>
         {/* Imagen decorativa superior izquierda */}
      <img
        src="https://img.icons8.com/color/48/idea.png"
        alt="icono 1"
        className="absolute top-8 left-32 w-12 h-12 z-10"
      />

      {/* Imagen decorativa inferior derecha */}
      <img
        src="https://img.icons8.com/color/48/books.png"
        alt="icono 2"
        className="absolute  bottom-2 md:bottom-16 lg:bottom-8 right-72 w-12 h-12 z-10"
      />
        <p className={`${COLORS["text_basic"]}  text-3xl lg:text-5xl pt-16 font-semibold  `}>Preparáte para tener</p>
        <p className={`${COLORS["text_basic"]}  text-3xl lg:text-5xl font-semibold `}>mejores oportunidades</p>
        <button className={`${COLORS["secundary"]} ${COLORS["hover"]} rounded-xl px-7 py-1.5 text-center font-bold text-white mt-4`}>Practica</button>

    </div>
      
    </>
  )
}
