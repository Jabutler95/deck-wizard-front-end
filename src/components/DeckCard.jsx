const DeckCard = ({ deck }) => {
  return (
    <li>
      <section>
        <button>
          X
        </button>
      </section>
      <h2>{ deck.title }</h2>
      <p> Wins: {deck.wins}</p>
      <p> Losses: {deck.losses}</p>
    </li>
  )
}

export default DeckCard