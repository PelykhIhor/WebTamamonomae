import React from 'react';

const footerItems = [
    { name: "Головна", href: "/" },
    { name: "Про мене", href: "/about-me" },
    { name: "Коледж", href: "/college" },
    { name: "Клондайк", href: "/klondike" },
    { name: "ZGDX-AI", href: "/zgdx-ai" },
    { name: "Admin Panel", href: "/admin-panel" },
    { name: "Status", href: "/status" },
];

const logo = {
    href: "https://flowbite.com/docs/images/logo.svg",
    title: "Tamamonomae",
};

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <a href={logo.href} className="flex items-center">
                    <img className="w-auto h-7" src={logo.href} alt={logo.title} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                        {logo.title}
                    </span>
                </a>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    {footerItems.map((item, index) => (
                        <a key={index} href={item.href}
                           className="text-sm font-semibold text-gray-200 transition-colors duration-300 hover:text-yellow-400 dark:hover:text-yellow-400">
                            {item.name}
                        </a>
                    ))}
                </div>
                <p className="mt-6 text-sm font-semibold text-gray-500 lg:mt-0 dark:text-gray-400">
                    © Copyright 2024 {logo.title}
                </p>
            </div>
        </footer>
    );
}
