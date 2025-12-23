import Image from "next/image";
import MDXContent from "../mdx-content";

type SingleTestimonialProps = {
    type: string,
    title: string,
    mdx: string,
    mdxMap: Record<string, string>,
    testimonial: string,
    author: string,
    image: string
}

export const SingleTestimonialSection = (props: SingleTestimonialProps) => {
    const { title, mdx, mdxMap, testimonial, author, image } = props
    const source = mdx ? mdxMap[mdx] : null;

    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-end gap-x-24 px-8 md:px-16 lg:px-68 font-grotesk relative mt-48">
            <div className="flex flex-col items-center lg:items-start gap-y-8 pb-24 text-center lg:text-left">
                <span className="uppercase font-semibold text-gray-400">Acerca del proyecto</span>

                <h2 className="font-normal text-4xl lg:text-5xl max-w-[20ch] mx-auto lg:mx-0">{title}</h2>

                <div className="text-lg text-gray-600 font-light">
                    {source
                        ? <MDXContent source={source} />
                        : <p className="text-sm">No content.</p>}
                </div>

                <div className="flex flex-col gap-y-4 mt-4">
                    <p className="text-2xl underline max-w-[40ch]">
                        "{testimonial}"
                    </p>

                    <span className="text-lg">{author}</span>
                </div>
            </div>

            <Image src={image} className="max-w-xs h-auto object-cover" alt="mockup" width={890} height={1128} loading='lazy' />
        </section>
    )
}