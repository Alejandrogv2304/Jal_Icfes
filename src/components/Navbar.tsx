import  { useState } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { COLORS } from '../utils/styles';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`${COLORS["primary"]} flex justify-around p-4 font-system text-md font-semibold items-center fixed top-0 w-full z-50`}>
        {/* Logo */}
        <img className="h-18 w-18" src="https://img.icons8.com/plasticine/100/graduation-cap.png" alt="logo-web"/>
        
        <nav className='flex'>
            <ul className='text-white hidden lg:flex gap-4 '>
                <li><Link to="" className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' >Inicio</Link></li>
                <li><Link to="/simulacros" className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' >Simulacros</Link></li>
                <li><Link to="" className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' >Areas</Link></li>
                <li><Link to="" className='inline-block px-2 py-1 hover:border-b-2 transform transition duration-200 hover:scale-110' >Contenido</Link></li>
            </ul>
        </nav>

         <a className={`hidden lg:inline relative text-white no-underline border-2 border-white shadow-[6px_4px_0px_#f5f5dc] px-4 py-2
         ${COLORS["hover"]} hover:text-white`} href="" download>Material <IconDownload className="inline w-5 h-5 ml-2" /></a> 
        

        {/* Botón Hamburguesa  */}
        <button 
          className='lg:hidden text-2xl z-50 text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Menú Móvil  */}
        {isMenuOpen && (
          <div className={`lg:hidden fixed inset-0 ${COLORS["primary"]} z-40 flex flex-col items-center justify-start space-y-6 mt-16`}>
            <ul className='text-center text-white space-y-6'>
              <li><Link to="" className='hover:border-b-2 text-xl py-2 block transform transition duration-700 hover:scale-110'  onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
              <li><Link to="" className='hover:border-b-2 text-xl py-2 block transform transition duration-700 hover:scale-110'  onClick={() => setIsMenuOpen(false)}>Simulacros</Link></li>
              <li><Link to="" className='hover:border-b-2 text-xl py-2 block transform transition duration-700 hover:scale-110'  onClick={() => setIsMenuOpen(false)}>Areas</Link></li>
              <li><Link to="" className='hover:border-b-2 text-xl py-2 block transform transition duration-700 hover:scale-110'  onClick={() => setIsMenuOpen(false)}>Contenido</Link></li>
            </ul>
            
            <a 
              className={`relative text-white no-underline border-2 border-black shadow-[6px_4px_0px_#f5f5dc] px-6 py-2 hover:bg-black hover:text-white mt-4`} 
              href="" download
              onClick={() => setIsMenuOpen(false)}
            >
              Material <IconDownload className="inline w-10 h-10 ml-2" />
            </a> 
          </div>
        )}
      </header>
    </>
  );
}