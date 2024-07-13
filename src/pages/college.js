import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Disciplines from '@/components/Disciplines';

const projects = [
    {
        title: "Дискретна математика",
        description: "Програмки для підвищення своєї семестрової оцінки",
        link: "college/discrete-math",
        icon: "https://img.icons8.com/?size=100&id=BhhTRuubIcD4&format=png&color=FFFF00"
    },
    {
        title: "Операційні системи",
        description: "Проєкт для підвищення своєї семестрової оцінки",
        link: "college/operating-systems",
        icon: "https://img.icons8.com/?size=100&id=30840&format=png&color=FFFF00"
    }
];

export default function College() {
    return (
        <Layout>
            <Hero
                heading={false}
                title="Коледж"
                subtitle="Роботи з коледжу"
                showUpdateBanner={false}
                titleUpdateBanner=""
                subtitleUpdateBanner="Дізнатись більше"
                linkUpdateBanner="/upgrade"
                showButton={false}
                titleButton="Дивитись роботи"
                linkButton="#projects"
            />
            <Disciplines
                projects={projects}  // Передаємо projects як властивість у Disciplines
            />
        </Layout>
    );
}