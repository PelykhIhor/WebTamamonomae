"use client";

import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../app/globals.css";

export default function Layout({ children }) {
  useEffect(() => {
    const greetUserKey = "greetUserShown";
    const sixHoursInMs = 6 * 60 * 60 * 1000;

    const greetUser = () => {
      const hours = new Date().getHours();
      if ( 6 < hours < 12) return "Доброго ранку";
      if ( 12 < hours < 18) return "Добрий день";
      return "Добрий вечір";
    };

    const lastGreetedTime = localStorage.getItem(greetUserKey);
    const now = Date.now();

    if (!lastGreetedTime || (now - parseInt(lastGreetedTime)) > sixHoursInMs) {
      alert(greetUser() + "! Ласкаво просимо до Tamamonomae!");
      localStorage.setItem(greetUserKey, now.toString());
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
