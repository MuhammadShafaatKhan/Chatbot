import React, { useEffect, useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import SvgIcon from '@mui/material/SvgIcon';
import './App.css'
import config from './config.js';
import MessageParser from './components/MessageParser.jsx';
import ActionProvider from './components/ActionProvider.jsx';
import Button from '@mui/material/Button';

function App() {
  const [showChat, setShowChat] = useState(false)
  function toggleShowChat(){
    setShowChat(!showChat)
  }
  return (
    <>
    <Button 
      sx={{ 
        position: 'fixed', 
        bottom: '20px', 
        right: '40px',
        borderRadius: '50%' ,
        maxWidth: '45px', 
        maxHeight: '45px', 
        minWidth: '45px', 
        minHeight: '45px'
      }} 
      variant="contained" 
      size="large"
      onClick={() => {
        toggleShowChat()
      }}
    >
    <SvgIcon style={{ color: 'white' }}>
      {/* credit: plus icon from https://heroicons.com/ */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512" 
        className="appChatbotButtonIcon_Lq7z"
      >
        <path 
          d="M192 408h64v-48h-64zm384-216h-32a96 96 0 00-96-96H344V24a24 24 0 00-48 0v72H192a96 96 0 00-96 96H64a48 48 0 00-48 48v128a48 48 0 0048 48h32a96 96 0 0096 96h256a96 96 0 0096-96h32a48 48 0 0048-48V240a48 48 0 00-48-48zM96 368H64V240h32zm400 48a48.14 48.14 0 01-48 48H192a48.14 48.14 0 01-48-48V192a48 48 0 0148-48h256a48 48 0 0148 48zm80-48h-32V240h32zM240 208a48 48 0 1048 48 47.996 47.996 0 00-48-48zm160 0a48 48 0 1048 48 47.996 47.996 0 00-48-48zm-16 200h64v-48h-64zm-96 0h64v-48h-64z"
        >
        </path>
      </svg>
    </SvgIcon>
    </Button>
    {
      showChat? (<div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>) : null
    }
    
    </>
  )
}

export default App
