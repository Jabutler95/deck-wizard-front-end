const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/decks`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function create(formData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteDeck(deckId) {
  try {
    const res = await fetch(`${BASE_URL}/${deckId}`, {
      method: 'DELETE'
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  create,
  deleteDeck as delete,
}