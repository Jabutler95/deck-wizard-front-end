// css
import './DeckList.css'

// components 
import DeckCard from '../../components/DeckCard'

const DeckList = (props) => {
  return (
    <main className="list">
      <h1>DECK LIST</h1>

      {!props.decks.length && <h2>Oops! No decks here!</h2>}

      <ul>
        {props.decks.map((deck) => (
          <DeckCard
          deck={deck}
          key={deck._id}
          handleRemoveDeck={props.handleRemoveDeck}
          />
        ))}
      </ul>

    </main>
  )
}

export default DeckList