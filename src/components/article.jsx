import React from 'react'

const article = ({title , description}) => {
    return (
        <article className="text-white leading-relaxed flex flex-col gap-4 p-5 rounded-lg hover:shadow-xl transition-shadow duration-300 shadow-white text-justify h-72 border-2 shadow-lg overflow-hidden">
            <h2 className="text-4xl font-semibold text-blue-600 mb-2">{title}</h2>
            <p className="mb-4 leading-relaxed overflow-y-hidden">
                {description}
            </p>
        </article>
    )
}

export default article
