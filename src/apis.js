export const completion = async (prompt) => {
  const response = await fetch(
    "http://127.0.0.1:3000/api/v1/get_completion",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    }
  )

  const data = await response.json()
  return data.summary;
}

export const inferring = async (prompt) => {
  const response = await fetch(
    "http://127.0.0.1:3000/api/v1/inferring",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    }
  )

  const data = await response.json()
  return data.summary;
}

export const expanding = async ({ prompt, sentiment }) => {
  const response = await fetch(
    "http://127.0.0.1:3000/api/v1/expanding",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt, sentiment })
    }
  )

  const data = await response.json()
  return data.summary;
}