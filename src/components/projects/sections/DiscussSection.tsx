import Image from "next/image"

export const DiscussSection = () => {
    return (
        <section className="flex items-center justify-center my-24">
            <div className="flex flex-col gap-y-6 max-w-xl items-center font-grotesk">
                <Image src="/challenges.png" className="w-48 h-full" alt="discuss" width={456} height={244} loading='lazy' />

                <h2 className="text-4xl text-center max-w-[25ch]">
                    Hablemos de tu proyecto
                </h2>

                <p className="text-center text-lg text-gray-600 max-w-[50ch] font-light">
                    Nuestro equipo puede mostrarte cómo digitalizar tu institución sin fricción.
                </p>

                <button
                    aria-label="optimizar-gestion"
                    className="bg-teal-100 hover:bg-teal-200 transition-colors duration-200 px-8 py-4 rounded-full"
                >
                    Quiero optimizar mi gestión
                </button>
            </div>
        </section>
    )
}