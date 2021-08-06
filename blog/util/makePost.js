export async function makePost(title, created, body) {
  const data = await fetch(`http://localhost:3000/api/makePost`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      created,
      body
    })
  })
}
