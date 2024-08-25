import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css'
import config from './config.js';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';

function App() {

  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default App
