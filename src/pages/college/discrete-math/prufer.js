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
        "Щоб побудувати граф потрібно написати код Прюфера. Наприклад, 2 3 4 4 4 7 7 7 7",
        "На фото-галереї видно дизайн та можливості даної програмки"
    ]
};

const carouselImages = [
    "https://i.postimg.cc/Jh2jS4cf/prufel-main.png",
    "https://i.postimg.cc/V6DG5bMd/prufer-about.png",
    "https://i.postimg.cc/J7YYLZMF/prufer-about-program.png",
    "https://i.postimg.cc/NfWNyty7/prufer-code-to-tree.png"
];

const downloadLinks = [
    {
        href: "https://drive.google.com/uc?export=download&id=15yIARkMSf9n1vpO7pdXfbXaUNxZ0_5ns",
        icon: "https://img.icons8.com/?size=100&id=tpIcYSg4KMn0&format=png&color=FFFFFF",
        title: "Програма",
        file: ".7z",
        os: "Windows",
    },
];

export default function Prufer() {
    return (
        <Layout>
            <Hero
                heading={false}
                title="Код Прюфера"
                subtitle="Побудова графа по коду Прюфера"
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
