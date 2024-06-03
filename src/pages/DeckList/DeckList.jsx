// css
import styles from './DeckList.module.css'

// components 
import DeckCard from '../../components/DeckCard'

const DeckList = ({ decks, handleRemoveDeck}) => {
  return (
    <main className={styles.list}>
      <h1>DECK LIST</h1>

      {!decks.length && <h2>Oops! No decks here!</h2>}

      <ul>
        {decks.map((deck) => (
          <DeckCard
          deck={deck}
          key={deck._id}
          handleRemoveDeck={handleRemoveDeck}
          />
        ))}
      </ul>

    </main>
  )
}

export default DeckList