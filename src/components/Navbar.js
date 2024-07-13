"use client";

import React, { useState } from 'react';

const navItems = [
    { name: "Головна", href: "/" },
    { name: "Про мене", href: "/about-me" },
    { name: "Коледж", href: "/college" },
    { name: "Клондайк", href: "/klondike" },
    { name: "ZGDX-AI", href: "/zgdx-ai" },
    { name: "Admin Panel", href: "/admin-panel" },
];

const logo = {
    href: "https://flowbite.com/docs/images/logo.svg",
    title: "Tamamonomae",
};

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <nav className="bg-black border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href={logo.href} className="flex items-center">
                        <img src={logo.href} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">{logo.title}</span>
                    </a>
                    <div className="flex md:order-2">
                        <button data-collapse-toggle="navbar" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-auto" id="navbar">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {navItems.map((item, index) => (
                                <NavItem key={index} href={item.href} text={item.name} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

function NavItem({ href, text }) {
    return (
        <li>
            <a href={href} className="block py-2 pl-3 pr-4 text-xl font-semibold text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                {text}
            </a>
        </li>
    );
}
