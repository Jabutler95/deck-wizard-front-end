// npm modules
import { useState } from "react"

// css
import './NewDeck.css'

const NewDeck = (props) => {
    const [form, setForm] = useState({
    title: '',
    wins: 0,
    losses: 0,
    notes: '',
    mana: 'Green'
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddDeck(form)
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }
  
  return (
    <main className="new">
      <h1>NEW DECK</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />

        <label htmlFor="wins-input">Wins</label>
        <input
          required
          min="0"
          type="number"
          name="wins"
          id="wins-input"
          placeholder="Number of wins"
          value={form.wins}
          onChange={handleChange}
        />

        <label htmlFor="losses-input">Losses</label>
        <input
          required
          min="0"
          type="number"
          name="losses"
          id="losses-input"
          placeholder="Number of losses"
          value={form.losses}
          onChange={handleChange}
        />

        <label htmlFor="notes-input">Notes</label>
        <input
          required
          type="text"
          name="notes"
          id="notes-input"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />

        <label htmlFor="mana-input">Mana Color</label>
        <select
        required
        name="mana"
        id="mana-input"
        value={form.mana}
        onChange={handleChange}
        >
          <option value="White">White</option>
          <option value="Black">Black</option>
          <option value="Green">Green</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Multi-Color">Multi-Color</option>
        </select>

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}

export default NewDeck