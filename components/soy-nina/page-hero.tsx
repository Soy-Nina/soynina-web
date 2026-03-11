interface PageHeroProps {
    title: string
    subtitle?: string
    image: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#140b3f]/80 via-[#140b3f]/70 to-[#140b3f]/85" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl pt-36 pb-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/70 mt-4 max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
