import { useContext } from "react";
import React from 'react';
import { UserRespContext } from '../userRespContext.js';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const setRestrictUser = useContext(UserRespContext);

  const handleHello = (name) => {
    const botMessage = createChatBotMessage(`Hello ${name}, Nice to meet you.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const askSportsQuestion = () => {
    const botMessage = 
      createChatBotMessage(
        `Do you have interest in sports?`,
        {
          withAvatar: false,
          widget: 'yesNoButton',
          delay: 1000
        }
      );
      setRestrictUser(true)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handleSportsResp = (resp)  => {
    console.log('resp: ', resp)
    const userRsp = resp? 'Yes':'No'
    const msg = resp? 
      `Nice, you are interested in sports` :
      `Its ok, not every body is interested in sports`
    const botMessage = 
      createChatBotMessage(
        msg
      );
      setRestrictUser(false)
    setState((prev) =>{
      console.log('prev.messages', prev.messages)
      prev.messages.at(-1).widget = undefined
      prev.messages.at(-1).withAvatar = undefined
      prev.messages.push(
        {
          id: Math.round(Date.now() * Math.random()),
          message: userRsp,
          type: 'user'
        }
      )
      return ({
      ...prev,
      messages: [...prev.messages, botMessage],
    })}
  );
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            askSportsQuestion,
            handleSportsResp
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;