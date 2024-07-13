import React from 'react';

export default function FAQ({ title, subtitle, icon, faqItems }) {
    return (
        <section className="bg-black dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div className="flex items-center">
                    <div className="inline-block p-3 text-white bg-yellow-600 rounded-lg">
                        {icon}
                    </div>
                    <div className="ml-4">
                        <h1 className="text-2xl font-semibold text-yellow-400 lg:text-3xl">{title}</h1>
                        <p className="mt-2 text-sm text-yellow-300">{subtitle}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }) {
    return (
        <div className="bg-black dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="inline-block p-3 text-white bg-yellow-600 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <h1 className="text-xl font-semibold text-yellow-400">{question}</h1>
            <p className="mt-2 text-sm text-yellow-300">{answer}</p>
        </div>
    );
}
