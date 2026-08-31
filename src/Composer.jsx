export default function Composer({ handleSubmit, setInput, input }) {
  return (
    <footer className="pizza-chat__footer bg-white">
      <div className="pizza-chat__composer">
        <form onSubmit={handleSubmit}>
          <div className="composer border rounded-4 shadow-sm">
            <textarea
              className="composer__input form-control border-0 shadow-none"
              rows="1"
              value={input}
              placeholder="Ask PizzaBot anything..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
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
  );
}
