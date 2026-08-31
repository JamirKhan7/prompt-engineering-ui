export const completion = async (prompt) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/get_completion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  return data.summary;
};

export const inferring = async (prompt) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/inferring', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await response.json();
  return data.summary;
};

export const expanding = async ({ prompt, sentiment }) => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/expanding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt, sentiment }),
  });

  const data = await response.json();
  return data.summary;
};

export const pizzaChatMessage = async ({ message, conversationId }) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/conversations/${conversationId}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ message, conversation_id: conversationId }),
      }
    );

    if (!response.ok) throw new Error('Failed to send message');

    const data = await response.json();

    return data.message;
  } catch (error) {
    console.log(error);

    return 'Sorry, something went wrong. Please try again.';
  }
};

export const getConversations = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/conversations');

    if (!response.ok) throw new Error('Failed to fetch conversations');

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createConversation = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/conversations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to create conversation');

    const data = await response.json();

    return data.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteConversation = async (id) => {
  const response = await fetch(
    `http://127.0.0.1:3000/api/v1/conversations/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) throw new Error('Failed to delete conversation');

  return true;
};

export const getConversationMessages = async (conversationId) => {
  const response = await fetch(
    `http://127.0.0.1:3000/api/v1/conversations/${conversationId}/messages`
  );
  if (!response.ok) {
    console.log('Failed to load conversation messages');
    return [];
  }

  const messages = await response.json();

  return messages;
};
