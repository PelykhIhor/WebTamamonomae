"use client";

import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../app/globals.css";

export default function Layout({ children }) {
  useEffect(() => {
    const greetUserKey = "greetUserShown";
    const infoMessageKey = "infoMessageShown";
    const sixHoursInMs = 6 * 60 * 60 * 1000; // 6 годин у мілісекундах
    const twoHoursInMs = 2 * 60 * 60 * 1000; // 2 години у мілісекундах

    // Функція для привітання користувача в залежності від часу доби
    const greetUser = () => {
      const hours = new Date().getHours();
      if (hours >= 6 && hours < 12) return "Доброго ранку";
      if (hours >= 12 && hours < 18) return "Добрий день";
      return "Добрий вечір";
    };

    // Отримуємо час останнього показу привітання
    const lastGreetedTime = localStorage.getItem(greetUserKey);
    const now = Date.now();

    // Перевіряємо, чи вже пройшло 6 годин з останнього показу
    if (!lastGreetedTime || (now - parseInt(lastGreetedTime)) > sixHoursInMs) {
      alert(greetUser() + "! Ласкаво просимо до Tamamonomae!");
      localStorage.setItem(greetUserKey, now.toString());
    }

    // Отримуємо час останнього показу інформаційного повідомлення
    const lastInfoMessageTime = localStorage.getItem(infoMessageKey);

    // Перевіряємо, чи вже пройшло 2 години з останнього показу
    if (!lastInfoMessageTime || (now - parseInt(lastInfoMessageTime)) > twoHoursInMs) {
      setTimeout(() => {
        alert("Білий фон тимчасово не працює, перейдіть в системі на темний.");
        localStorage.setItem(infoMessageKey, now.toString());
      }, 1000); // Delay for 1 second to avoid immediate pop-up
    }

    const handleBlur = () => {
      document.title = "ШВИДКО ПОВЕРНИСЬ!!!";
    };

    const handleFocus = () => {
      document.title = "Tamamonomae";
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </main>
  );
}
