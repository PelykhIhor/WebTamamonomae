import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function AboutMe() {
    return (
        <Layout>
            <Hero
                heading ={false}
                title="Про мене"
                subtitle="На цій сторінці представлено моє портфоліо(Поки що пусто, дуже лінь мені це робити)"
                showUpdateBanner={false}
                titleUpdateBanner = "Літнє оновлення"
                subtitleUpdateBanner = "Дізнатись більше"
                linkUpdateBanner = "/upgrade"
                showButton = {false}
                titleButton="Дізнатись більше"
                linkButton="#sponsor"
            />
        </Layout>
    );
}