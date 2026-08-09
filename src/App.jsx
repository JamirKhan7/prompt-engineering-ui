import { useState } from "react"

function App() {

  const [prompt, setPrompt] = useState("")
  const [summary, setSummary] = useState("")

  const getFullPrompt = () => {
    return `
You should express what you want a model to do by \ 
providing instructions that are as clear and \ 
specific as you can possibly make them. \ 
This will guide the model towards the desired output, \ 
and reduce the chances of receiving irrelevant \ 
or incorrect responses. Don't confuse writing a \ 
clear prompt with writing a short prompt. \ 
In many cases, longer prompts provide more clarity \ 
and context for the model, which can lead to \ 
more detailed and relevant outputs.
`;
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

  return (
    <div className="card w-50 mx-auto mt-5">
      <div className="card-body">
        <div className="mb-3">
          <textarea className="form-control" value={prompt} onChange={e => setPrompt(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" onClick={getCompletion}>Send</button>
        </div>

        <div>
          <div>{summary}</div>
        </div>
      </div>
    </div>
  )
}

export default App
