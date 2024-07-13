import React from "react";

const ProjectsSection = ({ projects }) => {
    const ProjectCard = ({ project }) => {
        const { href, imgSrc, title, rating, course, semester, language } = project;

        const renderStars = () => {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            return (
                <>
                    {Array.from({ length: fullStars }).map((_, idx) => (
                        <svg
                            key={`full-${idx}`}
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    {halfStar && (
                        <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033Z" />
                        </svg>
                    )}
                    {Array.from({ length: emptyStars }).map((_, idx) => (
                        <svg
                            key={`empty-${idx}`}
                            className="w-4 h-4 text-gray-200 dark:text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </>
            );
        };

        return (
            <div className="w-full mt-10 ml-10 mr-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                <a href={href}>
                    <img className="p-8 rounded-t-lg" src={imgSrc} alt={title} />
                </a>
                <div className="px-5 pb-5 mt-auto flex flex-col justify-end">
                    <a href={href}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            {renderStars()}
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 ms-3">
                            {course}
                        </span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 ms-3">
                            {semester}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {language}
                        </span>
                        <a
                            href={href}
                            className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                        >
                            Завантажити програмку
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="bg-white dark:bg-gray-900 content-center" id="projects">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
