// css
import './DeckList.css'

const DeckList = (props) => {
  return (
    <main className="list">
      <h1>DECK LIST</h1>

      {!props.decks.length && <h2>Oops! No decks here!</h2>}

      <ul>
        {props.decks.map((deck) => (
          <li key={deck._id}>
            {deck.name}
          </li>
        ))}
      </ul>

    </main>
  )
}

export default DeckList