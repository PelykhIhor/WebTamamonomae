import React from 'react';

export default function Profile({ title, name, realName, description, imageUrl, buttonLink, buttonText }) {
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
                <h1 className="mt-2 text-2xl font-semibold text-yellow-400 capitalize lg:text-3xl">{title}</h1>
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full bg-yellow-600 -z-10 md:h-96 rounded-2xl"></div>
                    <div className="w-full p-6 bg-yellow-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img
                            className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                            src={imageUrl}
                            alt={`${name} photo`}
                        />
                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight text-white">{name}</p>
                                <p className="text-yellow-200">{realName}</p>
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                {description}
                            </p>
                            <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button title="right arrow"
                                        className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-600 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                                    <a href={buttonLink}>{buttonText} &rarr;</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}
