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
          delay: 1000
        }
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
            askSportsQuestion
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;