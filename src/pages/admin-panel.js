import Layout from '@/components/Layout';
import LoginForm from '@/components/LoginForm';

export default function AdminPanel() {
    return (
        <Layout>
            <LoginForm
                title="Логін:"
                correctEmail="tamamonomae@vercel.app"
                correctPassword="tamamonomae-lider"
                logoUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                logoAlt="logo"
            />
        </Layout>
    );
}