import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi, this is chatbot. Can I please start with your name first`
    )
  ],
};

export default config;