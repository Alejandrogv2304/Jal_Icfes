import type { IconType } from "react-icons"
import { COLORS } from "../utils/styles"
import {motion} from 'framer-motion'


type AreaItemProps ={
area:{
    nombre:string,
    descripcion:string,
    icono:IconType
}
}

export default function AreaItem({area}:AreaItemProps) {
  return (
    <motion.div 
    className={`place-items-center flex-row  gap-2 p-4 lg:py-6 rounded-xl ${COLORS["blanco"]} mx-16 text-justify mb-8 shadow` }
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1, delay: 0.4 }}
    >
        <area.icono className='h-12 w-12 lg:h-24 lg:w-24 pb-4'/>
        <h2 className="pb-4 font-bold text-2xl">{area.nombre}</h2>
        <p className="opacity-70 pb-4 text-lg">{area.descripcion}</p>
        <button className={`bg-black w-9/10 rounded-md p-2 flex justify-center hover:bg-gray-800 text-white font-semibold cursor-pointer`}>Iniciar</button>
      
    </motion.div>
  )
}
