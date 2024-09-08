import React, { useState} from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import SvgIcon from '@mui/material/SvgIcon';
import './Home.css'
import config from '../../config.js';
import MessageParser from '../MessageParser.jsx';
import ActionProvider from '../ActionProvider.jsx';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { UserRespContext } from '../../userRespContext.js';
import { getToken } from '../../authToken.js'; 

// Theme is for adding responsive heading using mui
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Home() {
  const [showChat, setShowChat] = useState(false)
  const [restrictUser, setRestrictUser] = useState(false)
  const saveMessages = (messages, HTMLString) => {
    console.log('m:', messages)
    console.log('h:', HTMLString)
    sessionStorage.setItem('chat_messages', JSON.stringify(messages));
  };
  const loadMessages = () => {
    const messages = JSON.parse(sessionStorage.getItem('chat_messages'));
    return messages;
  };
  function toggleShowChat(){
    setShowChat(!showChat)
  }
  function validateInput(msg){
    // checks if the msg by user only contains white space:
    // ref: https://stackoverflow.com/a/10262019/16185710
    // or restrictUser is true then dont let user to enter message
    console.log(msg.replace(/\s/g, '').length)
    if (msg.replace(/\s/g, '').length === 0 || restrictUser)
      return false
    else
      return true
  }
  return (
    <UserRespContext.Provider value={setRestrictUser}>
      <ThemeProvider theme={theme}>
        <Typography 
          variant="h1"
          sx = {{
            color:'#514f4f',
            textAlign:"center"
          }}
        >
          CHATBOT
        </Typography>
        <Typography 
          variant="h3"
          gutterBottom 
          sx = {{
            color:'#514f4f',
            textAlign:"center"
          }}
        >
          {/* This chatbot is built using the library: <Link 
            href="https://github.com/FredrikOseberg/react-chatbot-kit" >
             react-chatbot-kit
          </Link>. */}
          This Chatbot will store the user’s responses to their account.
          So user must be signed in to use the chatbot.<br/>
          </Typography>
          {!getToken()?
          <Typography 
          variant="h4"
          gutterBottom 
          sx = {{
            color:'#514f4f',
            textAlign:"center"
          }}
        >
          If already have an account: <Link href="/sign-in" >Sign in</Link>.
          Otherwise: <Link href="/sign-up" >Sign up</Link>.
          </Typography>:
          null
          }
          <Typography 
          variant="body1"
          gutterBottom 
          sx = {{
            color:'#514f4f',
            textAlign:"center"
          }}
        >
          Its purpose is to 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus 
          condimentum est, non porta sem faucibus ornare. Suspendisse consequat 
          faucibus lorem. Aenean gravida, ex a ultricies dapibus, libero orci 
          convallis dolor, id condimentum orci dui non lacus. Maecenas feugiat 
          enim justo. Morbi venenatis, diam eu molestie dictum, est leo ornare 
          diam, vestibulum ullamcorper magna risus et sem. Fusce hendrerit commodo 
          turpis, vitae tempor nisl efficitur ut. Duis et justo in tortor pellentesque 
          ultrices quis nec felis. Nulla accumsan aliquet ipsum, sed viverra dui. 
          Cras sit amet bibendum neque, quis venenatis arcu.
          </Typography>
      </ThemeProvider>
      <Tooltip title={getToken() ? "" : "user must be signed in to use the chatbot"}>
        <span 
            style={{
                position:'fixed', 
                bottom:'20px', 
                right:'40px',
                width: '45px',
                height: '45px'
            }}
        >
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
      disabled={!getToken()}
      onClick={() => {
        toggleShowChat()
      }}
    >
    <SvgIcon>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512" 
        className="appChatbotButtonIcon_Lq7z"
      >
        <path 
          fill='white'
          d="M192 408h64v-48h-64zm384-216h-32a96 96 0 00-96-96H344V24a24 24 0 00-48 0v72H192a96 96 0 00-96 96H64a48 48 0 00-48 48v128a48 48 0 0048 48h32a96 96 0 0096 96h256a96 96 0 0096-96h32a48 48 0 0048-48V240a48 48 0 00-48-48zM96 368H64V240h32zm400 48a48.14 48.14 0 01-48 48H192a48.14 48.14 0 01-48-48V192a48 48 0 0148-48h256a48 48 0 0148 48zm80-48h-32V240h32zM240 208a48 48 0 1048 48 47.996 47.996 0 00-48-48zm160 0a48 48 0 1048 48 47.996 47.996 0 00-48-48zm-16 200h64v-48h-64zm-96 0h64v-48h-64z"
        >
        </path>
      </svg>
    </SvgIcon>
    </Button>
    </span>
    </Tooltip>
    {
      showChat? (<div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          validator={validateInput}
          saveMessages={saveMessages}
          messageHistory={loadMessages()}
        />
      </div>) : null
    }
    </UserRespContext.Provider>
  )
}

export default Home