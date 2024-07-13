import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Disciplines from '@/components/Disciplines-projects';

const projects = [
    {
        href: "operating-systems/osproject",
        imgSrc: "https://i.postimg.cc/cJQYDyLW/osp-main.png",
        title: "Unix-системи",
        rating: 3,
        course: "2 курс",
        semester: "2 семестр",
        language: "HTML"
    },
];

export default function DiscreteMath() {
    return (
        <Layout>
            <Hero
                heading={false}
                title="Операційні системи"
                subtitle="Роботи з дисципліни - Операційні системи"
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