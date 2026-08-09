import { useState } from "react"
import ReactMarkdown from "react-markdown"

function App() {

  const [prompt, setPrompt] = useState("")
  const [summary, setSummary] = useState("")

  const getFullPrompt = () => {
    return `
Making a cup of tea is easy! First, you need to get some \ 
water boiling. While that's happening, \ 
grab a cup and put a tea bag in it. Once the water is \ 
hot enough, just pour it over the tea bag. \ 
Let it sit for a bit so the tea can steep. After a \ 
few minutes, take out the tea bag. If you \ 
like, you can add some sugar or milk to taste. \ 
And that's it! You've got yourself a delicious \ 
cup of tea to enjoy.
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
          <pre>{summary}</pre>
        </div>
      </div>
    </div>
  )
}

export default App
