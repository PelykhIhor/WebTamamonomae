import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Sponsors from '@/components/Sponsors'
import Profile from '@/components/Profile'
import FAQ from '@/components/FAQ';

const MainSponsors = [
    {
        name: 'Наталія',
        image: "https://r4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-2f90bab4aa24717564de73059781f6fb.jpg",
        tags: ['Sponsor', 'Business', 'Vip', 'Custom']
    },
    {
        name: 'Єва',
        image: "https://r4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-2f90bab4aa24717564de73059781f6fb.jpg",
        tags: ['Vip', 'Custom']
    },
    {
        name: 'Катерина',
        image: "https://r4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-2f90bab4aa24717564de73059781f6fb.jpg",
        tags: ['Vip', 'Custom']
    },
    {
        name: 'Нейро',
        image: "https://r4.wallpaperflare.com/wallpaper/578/626/344/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-7efc81362f79710d9c77d390593c3286.jpg",
        tags: ['Custom']
    },
];

const faqItemsMainPage = [
    {
        question: "Чому на сайті так мало інформації?",
        answer: "Сайт поділяється на дві частини: Public і Private. Ви зараз знаходитеся на Public. Більше інформації можна знайти на Private сторінці."
    },
    {
        question: "Для чого потрібна Public-сторінка?",
        answer: "Public-сторінка містить основну інформацію про мене та мої проєкти, які доступні для загального перегляду. Це своєрідне портфоліо, яке показує мої вміння та досягнення."
    },
    {
        question: "Що таке Private-сторінка?",
        answer: "Private-сторінка доступна тільки для вибраних користувачів. Тут розміщені додаткові матеріали, ексклюзивні проєкти та детальна інформація. Деякі функції для Business користувачів. "
    },
    {
        question: "Як отримати доступ до Private-сторінки?",
        answer: "Для отримання доступу до Private-сторінки необхідно зв'язатися зі мною через телеграм бота."
    },
    {
        question: "Як можна зв'язатися з вами?",
        answer: "Ви можете зв'язатися зі мною через нашого телеграм бота - TamVerApp_bot"
    }
];

const mainPageIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
);


export default function Home() {
  return (
      <Layout>
          <Hero
              heading = "Привітики!"
              title="я Tamamonomae"
              subtitle="На цій сторінці представлено моє портфоліо, включаючи проєкти, виконані під час навчання, та власні розробки. Найближчим часом очікуйте на значне оновлення, де буде опубліковано ZGDX-AI."
              showUpdateBanner={false}
              titleUpdateBanner = "Літнє оновлення"
              subtitleUpdateBanner = "Дізнатись більше"
              linkUpdateBanner = "/upgrade"
              showButton = {true}
              titleButton="Дізнатись більше"
              linkButton="#sponsor"
          />
          <Sponsors
            title = "Спонсори оновлення та редизайну сайта"
            subtitle = "Я 😊 щиро вдячний нашим 🌟 шанованим спонсорам за їхню 💖 неймовірну підтримку і віру в мою 🎉 роботу! Ваша ✨ безцінна допомога інколи 🙏 здається казкою, яка стала 💓 реальністю для мого 🌼 сайту-портфоліо. Я 🥳 щасливий мати таких 🚀 чудових спонсорів, як ви! Ваша 🌞 підтримка — це не 🎶 просто допомога, вона є 🌿 невід'ємною частиною моєї 🌸 успішної кар'єри і мотивації для подальших 🎊 досягнень!"
            sponsors={MainSponsors}
          />
          <Profile
              title="Про мене"
              name="Tamamonomae"
              realName="Справжнє ім'я - Пелих Ігор"
              description="Вся детальна інформація про мене розписана на сторінці 'Про Мене'."
              imageUrl="https://r4.wallpaperflare.com/wallpaper/875/694/334/spider-man-into-the-spider-verse-spider-man-miles-morales-movies-city-hd-wallpaper-3c135d1dd372c948d9c34ceedb907a75.jpg"
              buttonLink="/about-me"
              buttonText="Дізнатись більше"
          />
          <FAQ
              title="Часті запитання"
              subtitle={false}
              icon={mainPageIcon}
              faqItems={faqItemsMainPage}
          />
      </Layout>
  );
}