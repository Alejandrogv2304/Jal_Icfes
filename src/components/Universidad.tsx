import {motion} from 'framer-motion';

type UniversidadProps={
    universidad: {
    nombre: string
    imagen: string
    }
}

export default function Universidad({universidad}:UniversidadProps) {
  return (
    <motion.div className='bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black
             rounded p-3 h-36 w-36 lg:h-36 lg:w-36 flex flex-col items-center justify-center' 
             key={universidad.nombre}
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }} 
             viewport={{ once: false, amount: 0.3 }}
             transition={{ duration: 1.5, ease: "easeOut" }}>
             <img className='h-12 w-12 lg:h-24 lg:w-24' src={`${universidad.imagen}`}/>
             <p>{universidad.nombre}</p>
             </motion.div>
  )
}
