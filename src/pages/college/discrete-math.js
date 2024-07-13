import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Disciplines from '@/components/Disciplines-projects';

const projects = [
    {
        href: "discrete-math/prufer",
        imgSrc: "https://i.postimg.cc/Jh2jS4cf/prufel-main.png",
        title: "Код Прюфера",
        rating: 2,
        course: "2 курс",
        semester: "1 семестр",
        language: "PYTHON"
    },
    {
        href: "discrete-math/color-graph",
        imgSrc: "https://i.postimg.cc/W1VsMQCg/cg-main.png",
        title: "Розфарбування графів",
        rating: 4,
        course: "2 курс",
        semester: "2 семестр",
        language: "RUST"
    }
];

export default function DiscreteMath() {
    return (
        <Layout>
            <Hero
                heading={false}
                title="Дискретна математика"
                subtitle="Роботи з дисципліни - Дискретна математика"
                showUpdateBanner={false}
                titleUpdateBanner=""
                subtitleUpdateBanner="Дізнатись більше"
                linkUpdateBanner="/upgrade"
                showButton={false}
                titleButton="Дивитись роботи"
                linkButton="#projects"
            />
            <Disciplines
                projects={projects}
            />
        </Layout>
    );
}