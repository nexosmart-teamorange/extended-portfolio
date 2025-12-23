import { Check } from "lucide-react"
import MDXContent from "../mdx-content"

type SummaryProps = {
    type: string
    mdx: string
    mdxMap: Record<string, string>
    features: {
        bullet: string
        element: string
    }[]
    results: string[]
}

export const SummarySection = (props: SummaryProps) => {
    const { mdx, mdxMap, features, results } = props
    const source = mdx ? mdxMap[mdx] : null

    return (
        <section className="w-full flex flex-col items-center justify-center gap-y-12 font-grotesk mb-24 px-8 md:px-16 lg:px-0">
            <div className="text-lg text-center max-w-[65ch]">
                {source ? (
                    <MDXContent source={source} />
                ) : (
                    <p className="text-sm">No content.</p>
                )}
            </div>

            <div className="w-3/5 h-px bg-gray-300"></div>

            <ul className="flex flex-row gap-x-16 items-center">
                {features.map((item, index) =>
                    <li key={index} className="flex flex-col gap-y-2 font-light">
                        <span className="text-4xl">{item.bullet}</span>
                        <span className="text-lg">{item.element}</span>
                    </li>
                )}
            </ul>

            <ul className="grid grid-cols-3 gap-x-8 gap-y-2">
                {results.map((item, index) =>
                    <li key={index} className="flex flex-row gap-x-2 items-center">
                        <Check size={16} />
                        <span className="font-light">{item}</span>
                    </li>
                )}
            </ul>
        </section>
    )
}