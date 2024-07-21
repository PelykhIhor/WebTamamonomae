import Navbar from './Navbar';
import Footer from './Footer';
import "../app/globals.css";

export default function Layout({ children }) {

    window.addEventListener("blur", () => {
        document.title = "ШВИДКО ПОВЕРНИСЬ!!!";
    });
    window.addEventListener("focus", () => {
        document.title = "Tamamonomae";
    });

    
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </main>
    );
}
