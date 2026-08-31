import './conversation-sidebar.scss';

export default function Sidebar({
  conversations,
  activeConversationId,
  onNewChat,
  onSelectConversation,
  onDeleteConversation,
}) {
  return (
    <aside className="conversation-sidebar">
      <div className="conversation-sidebar__header">
        <button
          type="button"
          className="conversation-sidebar__new-chat"
          onClick={onNewChat}
        >
          <span>+</span>
          <span>New Chat</span>
        </button>
      </div>

      <div className="conversation-sidebar__list">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`conversation-item ${
              conversation.id === activeConversationId
                ? 'converation-item--active'
                : ''
            }`}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="conversation-item__title text-truncate">
              {conversation.title || 'New Conversation'}
            </div>

            <button
              className="conversation-item__delete btn btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteConversation(conversation.id);
              }}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
