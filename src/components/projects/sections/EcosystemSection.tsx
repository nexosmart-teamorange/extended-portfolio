import { Check } from "lucide-react"
import MDXContent from "../mdx-content"
import { EcosystemRing } from "@/components/ui/EcosystemRing"

type EcosystemProps = {
    type: string
    mdx: string
    description: string
    achievements: {
        bullet: string
        element: string
    }[]
    mainPoints: {
        bullet: string
        element: string
    }[]
    mdxMap: Record<string, string>
}

export const EcosystemSection = (props: EcosystemProps) => {
    const { mdx, description, achievements, mainPoints, mdxMap } = props
    const source = mdx ? mdxMap[mdx] : null

    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-y-24 gap-x-24 font-grotesk px-8 lg:pl-68 lg:pr-0">
            <div className="flex flex-col gap-y-12">
                <div className="text-4xl max-w-[20ch] text-center lg:text-left mx-auto">
                    {source ? (
                        <MDXContent source={source} />
                    ) : (
                        <p className="text-sm">No content.</p>
                    )}
                </div>

                <p className="text-gray-600 text-lg max-w-[50ch] font-light text-center lg:text-left">
                    {description}
                </p>

                <div className="hidden lg:flex flex-col gap-y-4 bg-teal-100 relative w-fit pt-8 px-12 rounded-3xl">
                    <span className="text-xl max-w-[15ch]">
                        Lo que vos también podés lograr
                    </span>

                    <ul className="flex flex-col gap-y-2 text-gray-950 divide-y w-fit divide-gray-300">
                        {achievements.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-row gap-x-4 items-center pb-2"
                            >
                                <Check size={16} />

                                <div className="flex flex-col">
                                    <span className="text-sm">{item.bullet}</span>
                                    <span className="text-xs text-gray-600">
                                        {item.element}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button
                        aria-label="optimizar-gestion"
                        className="bg-white hover:bg-gray-50 transition-colors duration-200 px-4 py-4 rounded-full text-sm relative top-6"
                    >
                        Quiero optimizar mi gestión
                    </button>
                </div>
            </div>

            <div className="w-3/5 lg:w-2/5">
                <EcosystemRing mainPoints={mainPoints} />
            </div>
        </section>
    )
}