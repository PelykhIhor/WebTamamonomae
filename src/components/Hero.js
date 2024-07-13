'use client';

import React, { useEffect, useState } from 'react';

const images = [
    'https://r4.wallpaperflare.com/wallpaper/853/646/356/the-simpsons-lisa-simpson-bart-simpson-homer-simpson-wallpaper-59a098fd612a0dcb16f7483f5031f6fd.jpg',
    'https://r4.wallpaperflare.com/wallpaper/858/910/403/the-simpsons-bart-simpson-cartoon-homer-simpson-wallpaper-794db6d44e8f8c0828f42465b7ef276b.jpg',
    'https://r4.wallpaperflare.com/wallpaper/218/980/871/cartoons-wallpaper-2bfce4c1a80f5e75cbc99c6311246a88.jpg',
    'https://r4.wallpaperflare.com/wallpaper/227/459/808/the-simpsons-homer-simpson-marge-simpson-bart-simpson-wallpaper-f29b4a05c25e29421d7678b6a136cd3b.jpg'
];

export default function Hero({ heading, title, subtitle, showUpdateBanner, titleUpdateBanner, subtitleUpdateBanner, linkUpdateBanner, showButton, linkButton, titleButton }) {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        setBackgroundImage(randomImage);
    }, []);

    return (
        <div className="flex h-screen justify-center items-center dark:bg-slate-800" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div className="bg-black/50 w-full h-full flex justify-center items-center">
                <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
                    <div className="text-center bg-black/40 p-6 rounded-lg">
                        {showUpdateBanner && (
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-yellow-400 bg-black/50 ring-1 ring-gray-900/10 hover:ring-gray-900/20">{titleUpdateBanner}{' '}
                                    <a href={linkUpdateBanner} className="font-semibold text-yellow-300">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {subtitleUpdateBanner} <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        )}
                        <h1 className="text-4xl font-extrabold tracking-tight text-yellow-400 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">
                                <span className="mb-1 block">{heading}</span>
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">{title}</span>
                            </span>
                        </h1>
                        <p className="mx-auto mt-3 max-w-xl text-lg text-yellow-300 sm:mt-5 md:mt-5">
                            {subtitle}
                        </p>
                        {showButton && (
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                                <div className="rounded-md shadow">
                                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-3 text-base font-medium text-black hover:bg-yellow-700 md:py-4 md:px-10 md:text-lg"
                                       href={linkButton}>{titleButton} &rarr;
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
