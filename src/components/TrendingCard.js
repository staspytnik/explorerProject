export default function TrendingCard({ card }) {
  return (
    <li>
      <div>
        <img src={card.image} alt={card.name} />
        {card.release === 2026 && <span>New</span>}
      </div>

      <h2>{card.name}</h2>
      <span>{card.rating}</span>
      <span>{card.release}</span>
      <span>{card.genre}</span> {/* переробити на масив */}
      <span>{card.isPopular}</span>
      {card.isPopular && <span>popular</span>}
      {card.isFavorite && <span>❤️</span>}
    </li>
  );
}
