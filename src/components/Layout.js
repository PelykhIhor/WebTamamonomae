"use client";

import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  useEffect(() => {
    const handleBlur = () => {
      document.title = "ШВИДКО ПОВЕРНИСЬ!!!";
    };

    const handleFocus = () => {
      document.title = "Your Original Title"; // Replace with your original title
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    // Cleanup event listeners on component unmount
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
