import { useParams, useNavigate } from 'react-router-dom'
// css
import styles from './ConfirmDeleteDeck.module.css'


const ConfirmDeleteDeck = ({ decks, handleRemoveDeck }) => {
  const { deckId } = useParams()
  const navigate = useNavigate()

  const deck = decks.find(d => d._id === deckId);

  const handleConfirmClick = async () => {
    await handleRemoveDeck(deckId)
    navigate('/decks')
  }


  const handleCancelClick = () => {
    navigate('/decks')
  }

  return (
    <main className={styles.list}>
      <h1>Are you sure you want to delete {deck.title} deck?</h1>
      <button onClick={handleConfirmClick}>Yes</button>
      <button onClick={handleCancelClick}>No</button>
    </main>
  )
}

export default ConfirmDeleteDeck