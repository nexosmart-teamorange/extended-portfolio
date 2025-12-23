'use client'

import { Rocket, ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"

type EcosystemRingProps = {
    mainPoints: {
        bullet: string
        element: string
    }[]
}

export const EcosystemRing = ({ mainPoints }: EcosystemRingProps) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>("sede")

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }

    return (
        <div className="relative w-full h-auto aspect-square font-grotesk">
            <div className="absolute inset-0 rounded-full border border-cyan-200" />
            <div className="absolute inset-16 rounded-full border border-cyan-100" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-linear-to-b from-cyan-50 to-cyan-100 flex items-center justify-center shadow-sm">
                <Rocket className="w-10 h-10 text-gray-700" />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                    onClick={() => toggleAccordion("cms")}
                    className="bg-white rounded-2xl w-48 justify-center px-4 py-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow relative"
                >
                    <div className="flex flex-row gap-x-2 items-center justify-between">
                        <span className="font-medium text-gray-800">{mainPoints[0].bullet}</span>
                        {openAccordion === "cms" ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                    </div>

                    {openAccordion === "cms" && (
                        <div className="text-sm text-gray-500 text-left">
                            {mainPoints[0].element}
                        </div>
                    )}
                </button>
            </div>

            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <button
                    onClick={() => toggleAccordion("entradas")}
                    className="bg-white rounded-2xl w-48 justify-center px-4 py-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow relative"
                >
                    <div className="flex flex-row gap-x-2 items-center justify-between">
                        <span className="font-medium text-gray-800">{mainPoints[1].bullet}</span>
                        {openAccordion === "entradas" ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                    </div>

                    {openAccordion === "entradas" && (
                        <div className="text-sm text-gray-500 text-left">
                            {mainPoints[1].element}
                        </div>
                    )}
                </button>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <button
                    onClick={() => toggleAccordion("portal")}
                    className="bg-white rounded-2xl w-48 justify-center px-4 py-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow relative"
                >
                    <div className="flex flex-row gap-x-2 items-center justify-between">
                        <span className="font-medium text-gray-800">{mainPoints[2].bullet}</span>
                        {openAccordion === "portal" ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                    </div>

                    {openAccordion === "portal" && (
                        <div className="text-sm text-gray-500 text-left">
                            {mainPoints[2].element}
                        </div>
                    )}
                </button>
            </div>

            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-end">
                    <button
                        onClick={() => toggleAccordion("sede")}
                        className="bg-white rounded-2xl w-48 justify-center px-4 py-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow relative"
                    >
                        <div className="flex flex-row gap-x-2 items-center justify-between">
                            <span className="font-medium text-gray-800">{mainPoints[3].bullet}</span>
                            {openAccordion === "sede" ? (
                                <ChevronUp className="w-4 h-4 text-gray-500" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                            )}
                        </div>

                        {openAccordion === "sede" && (
                            <div className="text-sm text-gray-500 text-left">
                                {mainPoints[3].element}
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}