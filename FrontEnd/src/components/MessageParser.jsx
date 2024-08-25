import React from 'react';
import { useState } from 'react'

const MessageParser = ({ children, actions }) => {
  const [isHelloHandled, setIsHelloHandled] = useState(false)
  const parse = (message) => {
    console.log(message);
    if (!isHelloHandled){
      actions.handleHello(message);
      setIsHelloHandled(true)
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;