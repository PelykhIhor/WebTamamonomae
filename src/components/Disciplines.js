import React from 'react';

const Disciplines = ({ projects }) => {
    return (
        <section className="bg-white dark:bg-gray-900 py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3 xl:mt-12 xl:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="p-8 space-y-3 border-2 border-yellow-400 dark:border-yellow-300 rounded-xl">
                            <span className="inline-block text-yellow-500 dark:text-yellow-400">
                                <img src={project.icon} alt={`${project.title} icon`} className="w-8 h-8"/>
                            </span>
                            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                                {project.title}
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300">
                                {project.description}
                            </p>
                            <a href={project.link} className="inline-flex p-2 text-yellow-500 capitalize transition-colors duration-300 transform bg-yellow-100 rounded-full dark:bg-yellow-500 dark:text-white hover:underline hover:text-yellow-600 dark:hover:text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Disciplines;
