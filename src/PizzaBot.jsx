import { useState } from "react";
import "./pizza_bot.scss"

export default function() {
  const [messages, setMessages] = useState([  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // send an api request...
  };

  return(
    <div class="pizza-chat d-flex flex-column">
      <main className="pizza-chat__messages flex-grow-1 overflow-auto">
        <div className="pizza-chat__messages-inner container">
          {
            messages.map(message => (
              <div
                key={message.id}
                className={`message d-flex mb-4 ${
                  message.role === 'user'
                  ? 'justify-content-end'
                  : 'justify-content-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="message__avatar me-3 flex-shrink-0">
                    🍕
                  </div>
                )}

                <div
                className={`message__content ${
                  message.role === 'user'
                  ? 'message__content--user'
                  : 'message__content--assistant'
                }`}>
                  {message.content}
                </div>
              </div>
            ))
          }
        </div>
      </main>

      <footer className="pizza-chat__footer bg-white">
        <div className="pizza-chat__composer container">
          <form onSubmit={handleSubmit}>
            <div className="composer border rounded-4 shadow-sm">
              <textarea
              className="composer__input form-control border-0 shadow-none"
              rows="1"
              value={input}
              placeholder="Ask PizzaBot anything..."
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              />

              <div className="composer__actions d-flex justify-content-end">
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="composer__send btn rounded-circle"
                >
                  ↑
                </button>
              </div>
            </div>
          </form>

          <div className="pizza-chat__disclaimer text-center text-muted">
            PizzaBot can make mistakes. Check important information.
          </div>
        </div>
      </footer>
    </div>
  );
}