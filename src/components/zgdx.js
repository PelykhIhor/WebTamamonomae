import React, { useState } from "react";

export default function Zgdx() {
    const [fileError, setFileError] = useState("");
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.name.split('.').pop();
            if (fileType === "zgd" || fileType === "txt" || fileType === "conf") {
                setFileError("Файл не правильний, надайте файл, який ви отримали в ТГ-боті");
                setFileName(file.name);
            } else {
                setFileError("Неправильний файл. Потрібні файли: .zgd, .txt, .conf");
                setFileName("");
            }
        } else {
            setFileError("Файл не завантажено");
            setFileName("");
        }
    };

    const handleSubmit = (event) => {
        if (!fileName) {
            event.preventDefault();
            setFileError("Файл не завантажено");
        }
    };

    return (
        <div className="p-4">
            <section className=" dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Доступ не для всіх</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">ZGDX-AI доступний лише для деяких користувачів сайту! Доступний лише для користувачів Private</p>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Ввійти до ZGDX-AI
                            </h2>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш пароль</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ваш Телефон</label>
                                    <input type="phone" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="+380931234567" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
                                        Завантажте файл, який вам видав TamVerApp_bot
                                    </label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        accept=".zgd,.txt,.conf"
                                        onChange={handleFileChange}
                                    />
                                    {fileError && <p className="mt-1 text-sm text-red-500 dark:text-red-300">{fileError}</p>}
                                    {!fileError && fileName && <p className="mt-1 text-sm text-green-500 dark:text-green-300">Файл завантажено: {fileName}</p>}
                                </div>
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 sm:w-auto dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Ввійти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
