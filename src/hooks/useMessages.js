import { useState } from "react";

export const useMessages = (initMessages = []) => {
  const [messages, setMessages] = useState(initMessages);

  const addMessage = (message) => {
    setMessages((messages) => [message, ...messages]);
  };
  
  const removeMessage = (clearedMessage) => {
    setMessages((messages) =>
      messages.filter(({ message }) => message !== clearedMessage)
    );
  };

  const removeAllMessages = () => {
    setMessages([]);
  };

  const getMessagesByPriority = (priority) =>
    messages
      .filter(({ priority: msgPriority }) => priority === msgPriority)
      .map(({ message }) => message);

  return {
    getMessagesByPriority,
    addMessage,
    removeMessage,
    removeAllMessages,
  };
};
