const DeckCard = ({ deck, handleRemoveDeck }) => {
  return (
    <li>
      <section>
      <button onClick={() => handleRemoveDeck(deck._id)}>
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