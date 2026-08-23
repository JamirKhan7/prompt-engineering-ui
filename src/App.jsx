import { useState } from "react"
import ReactMarkdown from "react-markdown"

function App() {

  const [prompt, setPrompt] = useState("")
  const [summary, setSummary] = useState("")

  const getFullPrompt = () => {
    return prompt;
  }

  const getCompletion = async () => {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/get_completion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: getFullPrompt(prompt) })
      }
    )

    const data = await response.json()
    setSummary(data.summary)
  }

  const handleInferring = async () => {
    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/inferring",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: getFullPrompt(prompt) })
      }
    )

    const data = await response.json()
    setSummary(data.summary)
  }

  return (
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">
        <div className="mb-3">
          <textarea className="form-control" value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={getCompletion}>Send</button>
          <button className="btn btn-primary" onClick={handleInferring}>Inferring</button>
        </div>

        <div>
          <pre>{summary}</pre>
        </div>
      </div>
    </div>
  )
}

export default App
