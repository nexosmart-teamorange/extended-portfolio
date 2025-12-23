import Image from "next/image";

type SolutionProps = {
    icon: string
}

export const SolutionSection = (props: SolutionProps) => {
    const { icon } = props
    
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden font-grotesk">
            {/* Title - positioned to go slightly behind the top card */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-blue-900 lg:-mb-4 relative z-0">
                La solución
            </h1>

            <div className="relative w-full max-w-4xl mt-4 md:-mt-5">
                {/* Circular orbit lines */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] border border-accent rounded-full" />
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[550px] lg:h-[550px] border border-gray-300 rounded-full" />

                {/* Center image placeholder */}
                <div className="flex justify-center mb-8 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className="rounded-full bg-accent">
                        <Image
                            src={icon}
                            className="w-32 h-auto"
                            width={534}
                            height={548}
                            alt='solution-icon'
                        />
                    </div>
                </div>

                {/* Cards container */}
                <div className="flex flex-col md:block gap-6 md:gap-0 md:h-[500px] lg:h-[550px] relative">

                    {/* Portal responsive - Top */}
                    <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 z-20">
                        <div className="bg-white/50 backdrop-blur-xs rounded-4xl p-6 md:py-8 lg:py-10 border border-gray-300 max-w-xs mx-auto md:mx-0">
                            <h3 className="font-medium text-accent">Portal responsive</h3>

                            <p className="text-sm text-gray-500/90 max-w-[27ch] mt-1">
                                con catálogo completo, comparador de precios en tiempo real y checkout optimizado.
                            </p>
                        </div>
                    </div>

                    {/* Aplicación iOS y Android - Left */}
                    <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-20">
                        <div className="bg-white/80 backdrop-blur-md rounded-4xl p-6 md:py-8 lg:py-10 border border-gray-300 max-w-xs mx-auto md:mx-0">
                            <h3 className="font-medium text-accent">Aplicación iOS y Android</h3>

                            <p className="text-sm text-gray-500/90 max-w-[27ch] mt-1">
                                con búsqueda inteligente, geolocalización y notificaciones push para ofertas personalizadas.
                            </p>
                        </div>
                    </div>

                    {/* Dashboard - Right */}
                    <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
                        <div className="bg-white/80 backdrop-blur-md rounded-4xl p-6 md:py-8 lg:py-10 border border-gray-300 max-w-xs mx-auto md:mx-0">
                            <h3 className="font-medium text-accent">Dashboard</h3>

                            <p className="text-sm text-gray-500/90 max-w-[27ch] mt-1">
                                para gestión de inventario, pedidos y análisis de ventas con sincronización automática.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}