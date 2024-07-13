// src/components/LoginSection.js
import { useEffect, useState } from "react";

export default function LoginSection({ title, correctEmail, correctPassword, logoUrl, logoAlt, roles }) {
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        const form = document.getElementById('login-form');

        const handleSubmit = (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email !== correctEmail || password !== correctPassword) {
                setAlertVisible(true);

            } else {
                setAlertVisible(true);
            }
        };

        form.addEventListener('submit', handleSubmit);

        // Cleanup event listener on component unmount
        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, [correctEmail, correctPassword]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/"
                   className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src={logoUrl}
                         alt={logoAlt} />Tamamonomae
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div
                            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            <h1>{title}</h1>
                        </div>
                        {alertVisible && (
                            <div id="alert-2" className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
                                 role="alert">
                                <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800"
                                     fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M18 10A8 8 0 1110 2a8 8 0 018 8zM9 4a1 1 0 112 0v5a1 1 0 01-2 0V4zm1 8a1 1 0 100 2 1 1 0 000-2z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                                    У вас роль: <span
                                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Default</span>
                                </div>
                                <button onClick={() => setAlertVisible(false)} type="button"
                                        className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
                                        aria-label="Close">
                                    <span className="sr-only">Закрити</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                        <form className="space-y-4 md:space-y-6" id="login-form">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваша
                                    email/Телефон/ПІБ</label>
                                <input type="email" name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                       placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                                       required/>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                in
                            </button>
                            <p className="text-xl font-light text-gray-500 dark:text-gray-400">
                                Доступні ролі:<br/>
                                <span
                                    className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Sponsor</span>
                                <span
                                    className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Business</span>
                                <span
                                    className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Vip</span>
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Custom</span>
                                <span
                                    className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Admin</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
