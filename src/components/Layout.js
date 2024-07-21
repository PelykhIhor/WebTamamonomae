import Navbar from './Navbar';
import Footer from './Footer';
import "../app/globals.css";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
        </main>
    );
}
