import './messages.scss';

export default function Messages({ messages }) {
  return (
    <main className="pizza-chat__messages flex-grow-1 overflow-auto">
      <div className="pizza-chat__messages-inner">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message d-flex mb-4 ${
              message.role === 'user'
                ? 'justify-content-end'
                : 'justify-content-start'
            }`}
          >
            {message.role === 'assistant' && (
              <div className="message__avatar">🍕</div>
            )}

            <div
              className={`message__content ${
                message.role === 'user'
                  ? 'message__content--user'
                  : 'message__content--assistant'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
