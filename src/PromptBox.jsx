import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { completion, inferring, expanding } from './apis';

export default function PromptBox() {
  const [prompt, setPrompt] = useState('');
  const [summary, setSummary] = useState('');

  const getFullPrompt = () => {
    return prompt;
  };

  const handleCompletion = async () => {
    const summary = await completion(getFullPrompt(prompt));
    setSummary(summary);
  };

  const handleInferring = async () => {
    const summary = await inferring(getFullPrompt(prompt));
    setSummary(summary);
  };

  const handleExpanding = async () => {
    const options = {
      sentiment: 'negative',
      prompt: getFullPrompt(prompt),
    };
    const summary = await expanding(options);
    setSummary(summary);
  };
  return (
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">
        <div className="mb-3">
          <textarea
            className="form-control"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={handleCompletion}>
            Send
          </button>
          <button className="btn btn-primary me-2" onClick={handleInferring}>
            Inferring
          </button>
          <button className="btn btn-primary me-2" onClick={handleExpanding}>
            Expanding
          </button>
        </div>

        <div>
          <pre className="summary">{summary}</pre>
        </div>
      </div>
    </div>
  );
}
