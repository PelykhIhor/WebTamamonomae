import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message, category } = req.body;
        const content = `
      <b>Сообщение с сайта:</b>\n
      <b>Имя:</b> <i>${name}</i>\n
      <b>Почта:</b> <i>${email}</i>\n
      <b>Категория:</b> <i>${category}</i>\n
      <b>Сообщение:</b> <i>${message}</i>
    `;

        const apiToken = '7179182855:AAHd0mI02fl_LiWcRyQC1XAxjXryLqGyKfw';
        const chatId = 'YOUR_CHAT_ID';

        try {
            const response = await axios.get(
                `https://api.telegram.org/bot${apiToken}/sendMessage`,
                {
                    params: {
                        chat_id: chatId,
                        text: content,
                        parse_mode: 'HTML'
                    }
                }
            );

            if (response.data.ok) {
                res.status(200).json({ success: true });
            } else {
                res.status(500).json({ success: false, error: 'Failed to send message' });
            }
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
