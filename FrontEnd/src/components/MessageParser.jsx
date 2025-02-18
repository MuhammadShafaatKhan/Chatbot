import React from 'react';
import { useState } from 'react'

const MessageParser = ({ children, actions }) => {
  const [isHelloHandled, setIsHelloHandled] = useState(false)
  const parse = (message) => {
    console.log(message);
    if (!isHelloHandled){
      // TODO: replace userEmail with actual useemail, so that multiple user's 
      // messages dont get replaced by one another
      if (!sessionStorage.getItem('userEmail-HandleHello') ){
        actions.handleHello(message);
      }
      // TODO: if handlehello function got called then askSportsQuestion gets
      // called right away and user shouldnt be able to type but select from 
      // one of the option button. However if user refreshes the page, user 
      // is able to type. Need to fix it.
      actions.askSportsQuestion()
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