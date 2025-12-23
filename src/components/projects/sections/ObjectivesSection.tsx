type ObjectivesProps = {
    items: {
        bullet: string,
        element: string
    }[]
}

export const ObjectivesSection = (props: ObjectivesProps) => {
    const { items } = props

    return (
        <section className="font-grotesk bg-accent flex flex-col gap-y-4 text-white w-11/12 mx-auto rounded-2xl px-24 pt-8 pb-12 mb-8 mt-32 lg:mt-0">
            <span className="w-full font-semibold border-b border-gray-400/50 pb-4 text-center lg:text-left">
                Objetivos Clave
            </span>

            <ul className="flex flex-col lg:flex-row items-center lg:items-start gap-y-12 lg:gap-x-16 xl:gap-x-24 mt-4 text-gray-200">
                {items.map((item, index) =>
                    <li key={index} className="flex flex-col items-center lg:items-start">
                        <span>{'0' + `${(index + 1)}`}</span>

                        <span className="text-4xl">
                            {item.bullet}
                        </span>

                        <p className="text-sm mt-4">
                            {item.element}
                        </p>
                    </li>
                )}
            </ul>
        </section>
    )
}