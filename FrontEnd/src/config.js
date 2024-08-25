import { createChatBotMessage } from 'react-chatbot-kit';
import YesNoButton from './components/YesNoButton.jsx'

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi, this is chatbot. Can I please start with your name first`
    )
  ],
  widgets: [
    {
      widgetName: 'yesNoButton',
      widgetFunc: (props) => YesNoButton(props),
    }
  ]
};

export default config;