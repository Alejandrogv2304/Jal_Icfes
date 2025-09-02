import { SiLibreofficemath } from "react-icons/si";
import { FaBookReader, FaLanguage } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { MdOutlineScience } from "react-icons/md";
import AreaItem from "./AreaItem";
import { COLORS } from "../utils/styles";

export default function SimulacrosBox() {
    const areas = [
        {nombre:"Mátemáticas", descripcion:"En esta area se evalua el razonamiento lógico-matemático, la resolución de problemas y aplicación de conceptos.", icono:SiLibreofficemath, link:"matematicas"},
        {nombre:"Lectura Crítica", descripcion:"Evalúa la capacidad de comprender, analizar y evaluar textos de diferentes tipos, aplicando y reconociendo conceptos.", icono:FaBookReader,link:"lectura"},
        {nombre:"Inglés", descripcion:"Evalúa las habilidades de lectura, escritura, comprensión auditiva y expresión oral en la lengua extranjera inglés.", icono: FaLanguage, link:"ingles"},
        {nombre:"Sociales y Ciudadanas", descripcion:"Aborda temas como la historia, la geografía, la Constitución Política y los derechos y deberes ciudadanos. ", icono:GoLaw, link:"sociales"},
        {nombre:"Ciencias Naturales", descripcion:"Se centra en la comprensión de conceptos científicos, la aplicación del método científico y el análisis de fenómenos naturales", icono:MdOutlineScience,link:"naturales"}
    ]
  return (
    <>
    <div className={`${COLORS["crema"]} pt-32 text-center`}>
        <h1 className="text-4xl font-bold text-black py-8">Simulacros</h1>
        <p className="text-xl text-black">Aquí encontrarás simulacros de cada una de las aréas que se evalúan en el icfes.  Al finalizar obtendrás el resultado de tú desempeño</p>
    </div>
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 ${COLORS["crema"]}`}>
       
        {areas.map(area => (
            <AreaItem area={area}/>
        ))}
      
    </div>
    </>
  )
}
