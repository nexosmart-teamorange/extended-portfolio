'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { scrollToId } from '@/lib/utils'
import { Menu } from 'lucide-react'

export const Navbar = () => {
    const [menu, setMenu] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState(false);

    const handleMenu = (open: boolean) => {
        const container = document.getElementById('mobile-container')

        if (open && container) {
            setMenu(true)

            // el delay está para asegurar una transición suave 
            setTimeout(() => {
                container.classList.add('flex')
                container.classList.remove('hidden')
            }, 200)
        }
        else if (!open && container) {
            setMenu(false)
            container.classList.add('hidden')
            container.classList.remove('flex')
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-screen top-0 left-0 px-12 md:px-24 pt-8 pb-8 flex flex-row md:flex-col xl:flex-row gap-y-6 items-center z-50
        justify-between transition-colors duration-300 ${scrolled ? 'bg-[#FAFAFA]' : 'bg-[#FAFAFA]'}`}>
            <Link href="/" aria-label='Redirigir al inicio'>
                <Image src={'/logo.webp'} alt='NexoSmart Logo' width={192} height={28} loading='lazy' className='brightness-0' />
            </Link>

            <div className="hidden md:flex flex-row gap-x-8 text-sm font-acumin font-semibold tracking-tight text-gray-800 text-center">
                <button onClick={() => scrollToId("soluciones", 80)} aria-label='Soluciones' className='hover:underline cursor-pointer'>SOLUCIONES</button>
                <button onClick={() => scrollToId("diferenciadores", 80)} aria-label='¿Qué nos diferencia?' className='hover:underline cursor-pointer'>¿QUÉ NOS DIFERENCIA?</button>
                <button onClick={() => scrollToId("proceso", 80)} aria-label='NexoSmart y su proceso' className='hover:underline cursor-pointer'>CÓMO TRABAJAMOS</button>
            </div>

            <button 
                aria-label='Contacto'
                className="text-base bg-teal-100 hover:bg-teal-200 transition-colors duration-300 
                rounded-full text-gray-900 font-semibold py-3 px-8 cursor-pointer hidden md:flex"
                onClick={() => scrollToId("contacto", 80)}
            >
                Contacto
            </button>

            {/* mobile nav menu */}
            <button className={`flex md:hidden text-2xl text-black z-50 ${menu && 'rotate-90'} transition-all duration-300`}
                onClick={() => handleMenu(!menu)} aria-label={`Open navigation menu`}>
                <Menu />
            </button>

            <div className={`${menu ? 'w-full' : 'w-0'} h-screen fixed right-0 top-0 backdrop-blur-sm transition-all duration-300`}>
                <div className="h-full w-2/3 flex flex-col justify-center px-12 bg-gray-950 ml-auto">
                    <div className="flex flex-col gap-y-4 text-sm font-semibold tracking-tight text-white bg-gray-950
                        transition-all duration-1000" id="mobile-container">
                        <Link href='#soluciones' aria-label='Soluciones' className='hover:underline'>SOLUCIONES</Link>
                        <Link href='#diferenciadores' aria-label='¿Qué nos diferencia?' className='hover:underline'>¿QUÉ NOS DIFERENCIA?</Link>
                        <Link href='#proceso' aria-label='NexoSmart y su proceso' className='hover:underline'>CÓMO TRABAJAMOS</Link>
                        
                        <button className="text-base bg-white hover:bg-gray-200 transition-colors duration-300 
                        rounded-full text-gray-900 font-semibold py-3 px-8 cursor-pointer w-36 mt-8" aria-label='Contacto'>
                            Contacto
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}   