import { COLORS } from "../utils/styles";
import {motion } from 'framer-motion';


export default function Objetivos() {
  return (
    <div className={` ${COLORS["blanco"]} pt-8 pb-8 `}>
        <motion.h2 className="text-4xl text-center font-bold"
        whileHover={{
          x: [0, -100, 0], // movimiento horizontal ida y vuelta
          transition: {
            duration: 2, // tiempo del ciclo
            repeat: Infinity, // bucle infinito
            ease: "linear"
          }
        }}>¿Qué nos impulsa?</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <p className={`md:mx-32 mx-8 pt-8 ${COLORS["text_secundary"]} text-justify text-xl`}> Como bien sabemos un dicho muy popular en los colegios del país es: 
        <span className="font-bold">"Un puntaje no define tú inteligencia"</span>. Lo cuál es cierto, la prueba del Icfes
        solo evalúa el conocimiento en ciertas areás de manera específica. Entonces si esto es así,
        porqué hacer una plataforma para practicar para el Icfes. Si bien es cierto que este puntaje 
        no define la inteligencia de nadie, si es una puerta a grandes oportunidades y más para las 
        personas que no cuentan con recursos para universidades privadas. El camino acádemico es uno de los 
        varios que hay para triunfar en la vida, como lo pueden ser los negocios, el deporte, etc. Y en ese orden
        de ideas el obtener un buen puntaje en este examen puede ayudarte a entrar a grandes universidades y así
        prepararte para el futuro. Finalmente, el fin de esta plataforma es ser un recurso para que todos los estudiantes
        puedan prepararse de una mejor manera.

        </p>
        <motion.img src="/stonks.webp" className="pl-16 h-4/5 w-4/5 pt-8"
         initial={{ opacity: 0, y: 50 }}     // Estado inicial
        animate={{ opacity: 1, y: 0 }}      // Estado final
        transition={{ duration: 1, ease: "easeOut" }} // Duración y curva
        whileHover={{ scale: 1.1, rotate: 5 }} // Animación al pasar el mouse
        whileTap={{ scale: 0.95 }}/>
        </div>
    </div>
  )
}
