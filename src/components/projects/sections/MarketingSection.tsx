import { BadgeCheck } from "lucide-react";
import Image from "next/image";

type MarketingProps = {
    type: string
    mdx: string
    mdxMap: Record<string, string>
    title: string
    description: string
    image: string
    imageWidth: number
    items: {
        bullet: string
        element: string
    }[]
}

export const MarketingSection = (props: MarketingProps) => {
    const { image, title, description, items, imageWidth } = props

    return (
        <section className="flex flex-col gap-y-12 lg:flex-row items-center lg:items-start gap-x-24 px-8 md:px-16 lg:px-32 xl:px-68 text-center lg:text-left font-grotesk relative pb-48 mt-32 lg:mb-32">
            <div className="flex flex-col items-center lg:items-start gap-y-8 z-50">
                <span className="uppercase font-semibold text-gray-400">Acerca del proyecto</span>

                <h2 className="font-normal text-4xl lg:text-5xl max-w-[20ch]">{title}</h2>

                <div className="text-lg text-gray-600 font-light max-w-[50ch]">
                    {description}
                </div>
            </div>

            <Image
                src={image}
                className={`h-auto object-cover lg:absolute bottom-0 lg:right-0 xl:right-64 ${imageWidth && 'px-16 lg:px-8'}`}
                style={{ maxWidth: imageWidth ? imageWidth : '20rem' }}
                alt="overview"
                width={614}
                height={980}
                loading='lazy'
            />

            <ul className={`grid grid-cols-2 lg:flex flex-row gap-4 absolute bottom-16 
                ${title.length < 21 ? 'lg:bottom-16' : 'lg:-bottom-8'}`}>
                {items.map((item, index) =>
                    <li key={index} className="flex flex-row gap-x-4 items-center 
                    bg-black/80 px-8 py-12 rounded-4xl text-white backdrop-blur-lg">
                        <BadgeCheck size={24} />

                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm">{item.bullet}</span>
                            <span className="text-xs text-gray-300 max-w-[22ch]">{item.element}</span>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}