import React, { useState, useEffect } from 'react';

const DisciplinesProjectsAbout = ({ tabs, tabContents, carouselImages, downloadLinks }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
        }, 3000); // змінює слайд кожні 3 секунди

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <section className="dark:bg-gray-900 items-center justify-center">
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab"
                    data-tabs-toggle="#default-styled-tab-content"
                    role="tablist">
                    {tabs.map(tab => (
                        <li key={tab.id} className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === tab.id ? 'border-yellow-600 text-yellow-600 dark:text-yellow-500 dark:border-yellow-500' : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'}`}
                                onClick={() => handleTabClick(tab.id)}
                                id={`${tab.id}-styled-tab`}
                                type="button"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected={activeTab === tab.id}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="default-styled-tab-content">
                <div className={`${activeTab === 'info' ? '' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`} id="styled-info" role="tabpanel" aria-labelledby="info-tab">
                    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                        {tabContents.info.map((content, index) => (
                            <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                                <svg className="flex-shrink-0 w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400"
                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                <span>{content}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className={`${activeTab === 'gallery' ? '' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="styled-gallery" role="tabpanel" aria-labelledby="gallery-tab">
                    <div id="indicators-carousel" className="relative w-full flex justify-center items-center">
                        <div className="relative overflow-hidden rounded-lg"
                             style={{height: 'auto', maxWidth: '700px'}}>
                            {carouselImages.map((image, index) => (
                                <div key={index}
                                     className={`${currentSlide === index ? 'block' : 'hidden'} duration-700 ease-in-out`}
                                     data-carousel-item={currentSlide === index ? 'active' : ''}>
                                    <img src={image} className="w-full object-contain" alt="..."/>
                                </div>
                            ))}
                        </div>
                        <div
                            className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                            {carouselImages.map((_, index) => (
                                <button key={index} type="button"
                                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                                        aria-current={currentSlide === index} aria-label={`Slide ${index + 1}`}
                                        onClick={() => setCurrentSlide(index)}></button>
                            ))}
                        </div>
                        <button type="button"
                                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length)}>
                            <span
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button"
                                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length)}>
                            <span
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                </div>
                <div
                    className={`${activeTab === 'download' ? '' : 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800`}
                    id="styled-download" role="tabpanel" aria-labelledby="download-tab">
                    <div
                        className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Завантаження</h5>
                        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Ви можете завантажити програмку для різних ОС, вихідний код, якщо доступно!</p>
                        <div
                            className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                            {downloadLinks.map((link, index) => (
                                <a key={index} href={link.href}
                                   className="w-full sm:w-auto bg-yellow-800 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
                                    <img className="me-3 w-7 h-7" src={link.icon} alt={`${link.title} icon`}/>
                                    <div className="text-left rtl:text-right">
                                        <div className="mb-1 text-xs">{link.title} {link.file}</div>
                                        <div className="-mt-1 font-sans text-sm font-semibold">{link.os}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisciplinesProjectsAbout;
