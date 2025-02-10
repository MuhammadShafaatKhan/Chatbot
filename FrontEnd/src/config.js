import { createChatBotMessage } from 'react-chatbot-kit';
import YesNoButton from './components/YesNoButton.jsx';
import UserAvatar from './components/UserAvatar.jsx';

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
  ],
  customComponents: {
   userAvatar: () => UserAvatar(),
 }
};

export default config;