import { useState, useEffect, useRef } from 'react';
import './pizza_bot.scss';
import {
  pizzaChatMessage,
  createConversation,
  getConversations,
  deleteConversation,
  getConversationMessages,
} from './apis';
import Messages from './Messages';
import Composer from './Composer';
import Sidebar from './Sidebar';

export default function () {
  const [conversations, setConversations] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const initializationStarted = useRef(false);

  useEffect(() => {
    if (initializationStarted.current) return;

    initializationStarted.current = true;

    loadConversations();
  }, []);

  const loadConversations = async () => {
    const data = await getConversations();

    setConversations(data);
  };

  const addConversation = async () => {
    const id = await createConversation();

    debugger;

    id && setConversationId(id);
    setMessages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = input.trim();

    if (!message || !conversationId) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: 'user',
        content: message,
      },
    ]);
    setInput('');

    const assistantMessage = await pizzaChatMessage({
      message,
      conversationId,
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: 'assistant',
        content: assistantMessage,
      },
    ]);
  };

  const handleDeleteConversation = async (conversationId) => {
    await deleteConversation(conversationId);

    setConversations((prev) =>
      prev.filter((conversation) => conversation.id !== conversationId)
    );

    setConversationId(null);
  };

  const loadConversation = async (id) => {
    const messages = await getConversationMessages(id);

    setConversationId(id);
    setMessages(messages);
  };

  return (
    <div className="pizza-chat d-flex">
      <Sidebar
        activeConversationId={conversationId}
        conversations={conversations}
        onDeleteConversation={handleDeleteConversation}
        onSelectConversation={loadConversation}
        onNewChat={addConversation}
      />
      <div className="pizza-chat__content d-flex flex-column">
        <Messages messages={messages} />
        <Composer
          handleSubmit={handleSubmit}
          setInput={setInput}
          input={input}
        />
      </div>
    </div>
  );
}
