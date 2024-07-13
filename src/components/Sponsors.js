import React from 'react';
import classNames from 'classnames';

export default function Sponsors({ sponsors, title, subtitle }) {
    return (
        <section className="bg-black dark:bg-gray-900" id="sponsor">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-yellow-400 capitalize lg:text-3xl">
                    {title}
                </h1>
                <p className="max-w-2xl mx-auto my-6 text-center text-yellow-300">
                    {subtitle}
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={index} {...sponsor} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SponsorCard({ name, image, tags }) {
    return (
        <div className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image} alt={name} />
            <h1 className="mt-4 text-2xl font-semibold text-yellow-400 capitalize group-hover:text-white">{name}</h1>
            <div className="flex mt-3 -mx-2">
                {tags.map((tag, index) => {
                    const classes = getTagColorClasses(tag);
                    return (
                        <span key={index} className={classNames(...classes, 'text-xs', 'font-medium', 'me-2', 'px-2.5', 'py-0.5', 'rounded')}>
                            {tag}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

function getTagColorClasses(tag) {
    switch (tag) {
        case 'Sponsor':
            return ['bg-yellow-100', 'text-yellow-800', 'dark:bg-yellow-900', 'dark:text-yellow-300'];
        case 'Business':
            return ['bg-pink-100', 'text-pink-800', 'dark:bg-pink-900', 'dark:text-pink-300'];
        case 'Vip':
            return ['bg-purple-100', 'text-purple-800', 'dark:bg-purple-900', 'dark:text-purple-300'];
        case 'Custom':
            return ['bg-blue-100', 'text-blue-800', 'dark:bg-blue-900', 'dark:text-blue-300'];
        default:
            return ['bg-gray-100', 'text-gray-800', 'dark:bg-gray-900', 'dark:text-gray-300'];
    }
}
