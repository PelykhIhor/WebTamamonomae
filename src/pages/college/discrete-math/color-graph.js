import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import DisciplinesProjectsAbout from "@/components/Disciplines-projects-about";

const tabs = [
    { id: "info", label: "Опис" },
    { id: "gallery", label: "Фото-галерея" },
    { id: "download", label: "Завантажити" }
];

const tabContents = {
    info: [
        "На головній сторінці пусто, тому що в мене всі такі сторінки",
        "Інформація про автора, просто розписано про двох авторів програми",
        "Інформація про програму, розписано для чого створено програму та на якій мові програмування написана",
        "Щоб розфарбувати граф, потрібно написати матрицю суміжності",
        "Розфарбування відбувається так, щоб сусідні вершини не повторювались кольором",
        "На фото-галереї видно дизайн та можливості даної програмки"
    ]
};

const carouselImages = [
    "https://i.postimg.cc/W1VsMQCg/cg-main.png",
    "https://i.postimg.cc/brR34SYz/cg-about.png",
    "https://i.postimg.cc/dQRHhp2z/cg-about-program.png",
    "https://i.postimg.cc/QxX61mSV/cg-color-graph.png"
];

const downloadLinks = [
    {
        href: "https://drive.google.com/uc?export=download&id=1CdYoDU1jnH4hwQEm4DhQq8VewzSQBidi",
        icon: "https://img.icons8.com/?size=100&id=38805&format=png&color=000000",
        title: "Програма",
        file: ".7z",
        os: "Windows",
    },
];

export default function ColorGraph() {
    return (
        <Layout>
            <Hero
                heading={false}
                title="Розфарбування графів"
                subtitle="Побудова та розфарбування графів по матриці сміжності"
                showUpdateBanner={false}
                titleUpdateBanner=""
                subtitleUpdateBanner=""
                linkUpdateBanner=""
                showButton={false}
                titleButton=""
                linkButton=""
            />
            <DisciplinesProjectsAbout
                tabs={tabs}
                tabContents={tabContents}
                carouselImages={carouselImages}
                downloadLinks={downloadLinks}
            />

        </Layout>
    );
}
