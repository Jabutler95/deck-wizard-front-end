import { useNavigate } from 'react-router-dom'


const DeckCard = ({ deck }) => {
  const navigate = useNavigate()

  const handleDeleteClick = () => {
    navigate(`/decks/${deck._id}/confirm-delete`)
  }

  return (
    <li>
      <section>
      <button onClick={handleDeleteClick}>
          X
        </button>
      </section>
      <h2>{ deck.title }</h2>
      <p> Wins: { deck.wins }</p>
      <p> Losses: { deck.losses }</p>
      <p> Color: { deck.mana }</p>
    </li>
  )
}

export default DeckCard