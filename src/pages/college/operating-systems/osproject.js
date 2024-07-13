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
        "Просто маленький сайт",
        "Декілька сторінок, файлів .html",
        "Написаний сайт дуже криво. тому що для кожної .html-сторінки свій файл .css",
        "Погана оптимізація під пристрої. Небуло часу на розробку. Проєкт розроблявся в понеділок після 23:00, а оцінювався в вівторок на другій парі. ",
        "На фото-галереї видно дизайн та можливості даної програмки"
    ]
};

const carouselImages = [
    "https://i.postimg.cc/cJQYDyLW/osp-main.png",
    "https://i.postimg.cc/0N2MC6FY/osp-core.png",
    "https://i.postimg.cc/YSn4DrBJ/osp-lu.png",
    "https://i.postimg.cc/TwKKZzRh/osp-unix.png",
    "https://i.postimg.cc/4N6YkbTv/osp-thx.png",
    "https://i.postimg.cc/pLkyyWrp/osp-vidm.png"
];

const downloadLinks = [
    {
        href: "https://drive.google.com/uc?export=download&id=1kyaCwWIYUdRKnMpfye-mVKMgdsioHzNg",
        icon: "https://img.icons8.com/?size=100&id=tpIcYSg4KMn0&format=png&color=FFFFFF",
        title: "Проєкт + вихідний код",
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
