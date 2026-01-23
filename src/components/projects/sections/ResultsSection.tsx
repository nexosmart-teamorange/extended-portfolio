import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";

type ResultsProps = {
    type: string
    mdx: string
    mdxMap: Record<string, string>
    image?: string
    primaryColor: string
    secondaryColor: string
    upperItems: {
        icon: string
        bullet: string
        element: string
    }[]
    lowerItems: {
        bullet: string
        subtitle: string
        text: string
    }[]
}

export const ResultsSection = (props: ResultsProps) => {
    const { image, primaryColor, secondaryColor, upperItems, lowerItems } = props

    return (
        <section className="w-11/12 mx-auto rounded-2xl relative mb-16 px-8 py-16 lg:py-24 font-grotesk flex flex-col items-center justify-center gap-y-8 overflow-hidden">
            {image ? (
                <>
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-accent/80" />
                </>
            ) : (
                <div className="absolute inset-0 bg-accent" />
            )}

            <div className="relative z-10 flex flex-col gap-y-3 text-white text-center">
                <h1 className="text-5xl lg:text-6xl font-light">
                    Resultados Medibles
                </h1>

                <span className="lg:text-lg font-light">
                    Impacto real en el negocio y la experiencia del usuario
                </span>
            </div>

            <div className="relative z-10 flex flex-col gap-y-6">
                <div className="grid grid-cols-2 xl:flex flex-row gap-4 items-stretch flex-wrap">
                    {upperItems.map((item, index) =>
                        <div
                            key={index}
                            className="flex flex-col items-center gap-y-3 text-center px-10 py-6 rounded-4xl"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <div className="h-10 flex items-center justify-center">
                                <DynamicIcon name={item.icon as any} className="w-10 h-10 text-accent" strokeWidth={1} />
                            </div>

                            <span className="text-white font-medium text-4xl">
                                {item.bullet}
                            </span>

                            <span className="text-white font-light grow">
                                {item.element}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                    {lowerItems.map((item, index) =>
                        <div 
                            key={index} 
                            className="flex flex-col gap-y-3 w-full px-10 py-6 rounded-4xl"
                            style={{ backgroundColor: secondaryColor }}
                        >
                            <span className="text-white font-medium text-4xl">
                                {item.bullet}
                            </span>

                            <div className="flex flex-col">
                                <span className="text-white grow">
                                    {item.subtitle}
                                </span>

                                <span className="text-white font-light grow">
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}