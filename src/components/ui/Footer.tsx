'use client'

import Link from 'next/link'

import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export const Footer = (props: { english?: boolean }) => {
    const { english } = props

    return (
        <footer className="flex flex-col gap-y-8 bg-black text-gray-300 px-12 py-16 mx-4 mt-12 mb-4 rounded-2xl">
            <Link href="/" aria-label='Redirect to Home'>
                <Image src="/logo.webp" alt='NexoSmart Logo' className="w-48 mx-auto md:mx-0" width={192} height={28} />
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-32 justify-between w-full">
                <div className="flex flex-col gap-y-8 pt-8 border-t-2 border-stone-700">
                    <span className="flex flex-col text-xl lg:text-2xl tracking-tighter text-center lg:text-left">
                        <Link href='mailto:info@nexosmart.com' aria-label='contact email address' className='hover:underline'>
                            info@nexosmart.com
                        </Link>

                        <Link href='http://wa.me/5491157094992' aria-label='contact phone number' target='_blank' className='hover:underline'>
                            +54 91157094992
                        </Link>
                    </span>

                    <div className="flex flex-col gap-y-3">
                        <span className="text-center lg:text-left text-xl">
                            {english
                                ? 'You can find us in:'
                                : 'Podés encontrarnos en:'}
                        </span>

                        <div className='grid grid-cols-4 items-center w-[200px] gap-x-3 mx-auto sm:mx-0'>
                            <Image src="/argentina.webp" alt="argentina flag" width={36} height={36} loading='lazy' />
                            <Image src="/chile.webp" alt="chile flag" width={36} height={36} loading='lazy' />
                            <Image src="/colombia.webp" alt="colombia flag" width={36} height={36} loading='lazy' />
                            <Image src="/eeuu.webp" alt="usa flag" width={36} height={36} loading='lazy' />
                            <Image src="/uruguay.webp" alt="uruguay flag" className='brightness-110 contrast-75' width={36} height={36} loading='lazy' />
                            <Image src="/mexico.webp" alt="mexico flag" width={36} height={36} loading='lazy' />
                            <Image src="/spain.webp" alt="spain flag" width={36} height={36} loading='lazy' />
                            <Image src="/venezuela.webp" alt="venezuela flag" width={36} height={36} loading='lazy' />
                        </div>
                    </div>

                    <div className='flex md:hidden flex-row items-center text-2xl gap-x-4 mx-auto mt-2'>
                        <Link href='https://www.facebook.com/nexosmart' aria-label='NexoSmart Facebook'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Facebook />
                        </Link>

                        <Link href='https://www.instagram.com/nexosmart/' aria-label='NexoSmart Instagram'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Instagram />
                        </Link>

                        <Link href='https://www.linkedin.com/company/nexosmart' aria-label='NexoSmart LinkedIn'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Linkedin />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-y-8 pt-8 border-t-2 border-stone-700 mt-8 sm:mt-0">
                    <span className="text-xl lg:text-2xl tracking-tighter text-center lg:text-left">
                        {english ? 'Sections' : 'Secciones'}
                    </span>

                    <div className="flex flex-col gap-y-4 lg:gap-y-1 text-xs text-gray-500">
                        <div className="flex flex-col lg:flex-row items-center font-semibold">
                            <Link aria-label='Redirigir al inicio' href="/" className="hover:underline">HOME</Link>

                            <Link aria-label='Nuestras tecnologías' href="/#tecnologias"
                                className="lg:ml-auto hover:underline">
                                {english ? 'OUR STACK' : 'TECNOLOGÍAS'}
                            </Link>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center font-semibold">
                            <Link aria-label='Solicita tu desarrollo' href="/#contacto" className="">
                                {english ? 'CONTACT US' : 'SOLICITÁ TU DESARROLLO'}
                            </Link>

                            <Link aria-label='NexoSmart y el desarrollo de apps' href="https://www.nexosmart.com.ar/apps/"
                                className="lg:ml-auto hover:underline">
                                APPS
                            </Link>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center font-semibold">
                            <Link aria-label='Mira nuestro portfolio' href="/#portfolio" className="">PORTFOLIO</Link>

                            <Link aria-label='NexoSmart y las Smart Cities' href="https://www.nexosmart.com.ar/smart-city/"
                                className="lg:ml-auto hover:underline">
                                SMART CITY
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex flex-col gap-y-8 pt-8 border-t-2 border-stone-700">
                    <span className="text-xl lg:text-2xl tracking-tighter text-center md:text-left">
                        Social Media
                    </span>

                    <div className='flex flex-row items-center text-2xl gap-x-4'>
                        <Link href='https://www.facebook.com/nexosmart' aria-label='NexoSmart Facebook'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Facebook />
                        </Link>

                        <Link href='https://www.instagram.com/nexosmart/' aria-label='NexoSmart Instagram'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Instagram />
                        </Link>

                        <Link href='https://www.linkedin.com/company/nexosmart' aria-label='NexoSmart LinkedIn'
                            className='hover:scale-110 transition-transform duration-300 min-w-12 min-h-12'>
                            <Linkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}