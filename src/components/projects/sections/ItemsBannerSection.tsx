import { DynamicIcon } from "lucide-react/dynamic"
import Image from "next/image"

type ItemsBannerProps = {
    type: string,
    title: string,
    image: string,
    items: {
        icon: string,
        bullet: string,
        element: string,
    }[]
}

export const ItemsBannerSection = (props: ItemsBannerProps) => {
    const { title, image, items } = props

    return (
        <section className="w-11/12 mx-auto font-grotesk relative mb-36">
            <Image src={image} className="w-full h-80 lg:h-auto object-cover rounded-2xl lg:rounded-none" alt="banner" width={3466} height={814} loading='lazy' />

            <span className="text-center lg:text-left text-4xl text-white w-full lg:w-auto absolute top-24 lg:top-1/2 left-1/2 lg:left-87 -translate-y-1/2 -translate-x-1/2 whitespace-pre-line">{title}</span>

            <ul className="grid grid-cols-2 lg:flex flex-row gap-4 px-4 lg:px-0 absolute w-full -bottom-20 lg:-bottom-12 justify-center">
                {items.map((item, index) =>
                    <li key={index} className="flex flex-row gap-x-4 items-center
                    bg-white px-8 py-6 rounded-full text-gray-500 shadow-md">
                        <DynamicIcon name={item.icon as any} size={24} />

                        <div className="flex flex-col gap-y-1">
                            <span className="text-sm text-gray-900">{item.bullet}</span>
                            <span className="text-xs max-w-[20ch]">{item.element}</span>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    )
}