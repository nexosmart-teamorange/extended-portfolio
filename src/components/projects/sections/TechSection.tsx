import Image from "next/image";
import MDXContent from "../mdx-content";

type TechProps = {
    type: string,
    title: string,
    mdx: string,
    mdxMap: Record<string, string>,
    image: string,
    logos: string[],
    items: {
        bullet: string,
        element: string,
    }[]
}

export const TechSection = (props: TechProps) => {
    const { title, image, items, mdx, mdxMap, logos } = props
    const source = mdx ? mdxMap[mdx] : null;

    return (
        <section className="mb-16">
            <div className="w-11/12 mx-auto font-grotesk relative mb-80 lg:mb-28">
                <Image src={image} className="w-full h-90 lg:h-auto object-cover rounded-2xl lg:rounded-none" alt="tech" width={3470} height={830} loading='lazy' />

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left absolute top-12 left-1/2 lg:left-48 -translate-x-1/2 lg:translate-x-0 text-white gap-y-6">
                    <span className="text-4xl">{title}</span>

                    <div className="text-lg font-light w-120 lg:max-w-[70ch]">
                        {source
                            ? <MDXContent source={source} />
                            : <p className="text-sm">No content.</p>}
                    </div>
                </div>

                <ul className="grid grid-cols-2 lg:flex flex-row gap-4 absolute w-full px-4 lg:px-0 -bottom-48 lg:-bottom-16 justify-center">
                    {items.map((item, index) =>
                        <li key={index} className="flex flex-col gap-y-2
                    bg-white px-8 py-6 rounded-4xl text-gray-500 shadow-md">
                            <span className="text-sm text-gray-900 font-semibold">{item.bullet}</span>
                            <span className="text-xs max-w-[30ch]">{item.element}</span>
                        </li>
                    )}
                </ul>
            </div>

            <div className="hidden lg:flex flex-row items-center justify-center w-full saturate-0 gap-x-16">
                {logos.map((logo, index) => 
                    <Image src={logo} key={index} className="w-20 h-auto" alt={logo} width={192} height={66} loading='lazy' />
                )}
            </div>
        </section>
    )
}