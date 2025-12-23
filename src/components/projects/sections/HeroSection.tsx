import Image from "next/image";
import MDXContent from "../mdx-content";

type HeroProps = {
    type: string,
    title: string,
    mdx: string,
    mdxMap: Record<string, string>;
    backgroundImg: string,
    client: string,
    year: string,
    items: {
        bullet: string,
        element: string,
    }[]
}

export const HeroSection = (props: HeroProps) => {
    const { title, mdx, mdxMap, backgroundImg, client, year, items } = props
    const source = mdx ? mdxMap[mdx] : null;
    
    return (
        <section className="flex flex-col mt-28 md:mt-52 lg:mt-28 -mb-42 lg:-mb-28 mx-4 rounded-2xl relative">
            <Image src={backgroundImg} className="w-full h-120 object-cover rounded-2xl brightness-70" alt="hero" width={3758} height={1480} loading='lazy' />

            <div className="flex flex-col gap-y-1 items-center text-white text-center absolute left-1/2 -translate-x-1/2 top-24">
                <span className="text-xl">Caso de éxito</span>
                <h1 className="text-4xl lg:text-7xl font-grotesk tracking-wide">{title}</h1>
            </div>

            <div className="flex flex-col items-center lg:grid lg:grid-cols-[3fr_1fr] bg-[#FAFAFA] mx-8 lg:mx-16 px-8 py-8 lg:px-48 lg:py-16 font-grotesk relative -top-64 lg:-top-48 rounded-4xl">
                <div className="flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-4">
                        <span className="italic text-center lg:text-left">Caso de éxito</span>

                        <div className="text-3xl sm:text-4xl font-light text-center lg:text-left max-w-[35ch]">
                            {source
                                ? <MDXContent source={source} />
                                : <p className="text-sm text-muted-foreground">No content.</p>}
                        </div>
                    </div>

                    <div className="w-9/10 h-px bg-gray-300 mt-12 mb-8 mx-auto lg:mx-0"></div>

                    <ul className="grid grid-cols-2 lg:flex flex-row gap-x-12 gap-y-6 text-gray-950">
                        {items.map((item, index) =>
                            <li key={index} className="flex flex-col gap-y-2 mx-auto lg:mx-0 text-center lg:text-left">
                                <span>{item.bullet}</span>
                                <span className="text-3xl lg:text-4xl text-accent">{item.element}</span>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="hidden lg:flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-4">
                        <span className="text-lg">Cliente</span>

                        <Image src={client} className="w-32 h-auto" alt="cliente" width={276} height={103} loading='lazy' />
                    </div>

                    <div className="w-2/3 h-px bg-gray-300"></div>

                    <div className="flex flex-col text-lg">
                        <span>Año</span>
                        <span className="text-gray-600">{year}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}