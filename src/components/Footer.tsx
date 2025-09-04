import { COLORS } from "../utils/styles";

export default function Footer() {
  return (
    <div className={`${COLORS["primary"]} px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between font-montserrat` }>
      <img src="/image.png" className='invert h-5 lg:h-9' />
      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p> 2025 Primera Versión</p>
        <p> Desarrollado por Alejandro Gómez</p>
        <p> Aporta si puedes al Nequi: <span className="font-bold">3147195095</span></p>
      </div>
    </div>
  )
}