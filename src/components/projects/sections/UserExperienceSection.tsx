import Image from "next/image";
import { CircleCheck } from "lucide-react";

type UserExpProps = {
    type: string,
    mdx: string,
    mdxMap: Record<string, string>,
    image: string,
    items: {
        bullet: string,
        element: string,
    }[]
}

export const UserExperienceSection = (props: UserExpProps) => {
    const { image, items } = props

    return (
        <section className="mt-32 font-grotesk relative px-8 md:px-16 lg:pl-32 xl:pl-68 lg:pr-0">
            <div className="flex flex-col gap-y-6 lg:w-1/2">
                <div className="flex flex-col gap-y-2 text-center mx-auto lg:mx-0 lg:text-left">
                    <h1 className="text-4xl text-accent">
                        Experiencia de Usuario
                    </h1>

                    <p className="text-lg text-gray-600 font-light max-w-[40ch]">
                        Diseñamos cada interacción pensando en la simplicidad y accesibilidad
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                    {items.map((item, index) =>
                        <div key={index} className="flex flex-row items-center gap-x-6 bg-white px-6 py-10 rounded-2xl">
                            <CircleCheck className="text-accent shrink-0" fill="currentColor" stroke="white" />

                            <div className="flex flex-col gap-y-1">
                                <span className="text-accent font-medium">
                                    {item.bullet}
                                </span>

                                <span className="font-light">
                                    {item.element}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Image
                src={image}
                className={`h-auto object-cover absolute right-32 -bottom-5 translate-y-1/3 -z-20 hidden lg:flex`}
                alt="user-experience"
                width={614} 
                height={980}
                loading='lazy'
            />
        </section>
    )
}