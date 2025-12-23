import { Star, StarHalf } from 'lucide-react'

type ReviewProps = {
    type: string
    title: string
    stars: number
    quote: string
    author: string
}

export const ReviewSection = (props: ReviewProps) => {
    const { title, stars, quote, author } = props

    const fullStars = Math.floor(stars)
    const hasHalfStar = stars % 1 !== 0

    return (
        <section className="flex flex-col gap-y-8 w-full items-center justify-center font-grotesk my-16 px-8 md:px-16 lg:px-0">
            <h2 className='text-4xl lg:text-5xl whitespace-pre-line text-center'>
                {title}
            </h2>

            <div className="flex items-center gap-x-4">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={i} size={16} fill='#DBBD5A' color='#DBBD5A' />
                ))}

                {hasHalfStar && <StarHalf size={16} fill='#DBBD5A' color='#DBBD5A' />}
            </div>

            <p className='underline max-w-[60ch] text-center text-lg'>
                "{quote}"
            </p>

            <span>
                {author}
            </span>
        </section>
    )
}