import { COLORS } from "../utils/styles";
import Universidad from "./Universidad";


export default function Beneficios() {
  const universidades = [
    {nombre:"Los Andes", imagen:"/u_andes.png"},
    {nombre:"U. Caldas", imagen:"/u_caldas.png"},
    {nombre:"U. Cauca", imagen:"/u_cauca.jpg"},
    {nombre:"Eafit", imagen:"/u_eafit.png"},
    {nombre:"Javeriana", imagen:"/u_javeriana.png"},
    {nombre:"U. Norte", imagen:"/u_norte.png"},
    {nombre:"U. Rosario", imagen:"/u_rosario.png"},
    {nombre:"Uis", imagen:"/u_uis.png"},
    {nombre:"Utp", imagen:"/u_utp.png"},
    {nombre:"U. Valle", imagen:"/u_valle.png"}

  ]
  return (
    <>
    <div className={`${COLORS["blanco"]} flex-col pt-8`}>
      <h2 className="text-5xl text-center font-bold">Beneficios</h2>
      <div className={`md:mx-32 mx-8 pt-8 ${COLORS["text_secundary"]} text-justify`}>
      <p className="text-xl">
        El examen del icfes es una prueba estandarizada usada principalmente como criterio
        de admisión para las universidades en Colombia. Este examen no define la capacidad intelectual
        de un estudiante, pero es una puerta de entrada a grandes oportunidades acádemicas sobre todo 
        para los estudiantes de un nivel socioecónomico no tan alto. Y eso es lo que queremos brindar 
        con la plataforma, una manera de prepararse para lograr mejores oportunidades.
      </p>
      <p className="text-xl font-semibold">Algunas universidades que usan el icfes como criterio de admisión son:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-lg font-bold mt-16 lg:mt-16
        w-full place-items-center gap-y-6 lg:gap-y-12 mb-16">
        {universidades.map((universidad)=>(
          <Universidad universidad={universidad} key={universidad.nombre}/>
        ))}
      </div>
      </div>
      
    </div>
      
    </>
  )
}
