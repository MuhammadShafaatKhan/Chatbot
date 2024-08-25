import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

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

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handleSportsResp = (resp)  => {
    console.log('resp: ', resp)
    const msg = resp? `Nice, you are interested in sports`:`What are you interested in?`
    const botMessage = 
      createChatBotMessage(
        msg
      );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
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