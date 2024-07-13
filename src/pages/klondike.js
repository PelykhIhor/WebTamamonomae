import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

export default function klondike() {
    return (
        <Layout>
            <Hero
                heading ={false}
                title="Клондайк"
                subtitle="Великий список штучних інтелектів (Поки що пусто, розробляється список найпотужніших інструментів)"
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