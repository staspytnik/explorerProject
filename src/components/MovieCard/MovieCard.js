import PropTypes from "prop-types";
import cardStyles from "./MovieCard.module.css";
import { FaStar } from "react-icons/fa";
import breakIcon from "../../assets/images/brokenimage.png";
import LikeButton from "./LikeButton";

export default function MovieCard({
  card,
  favoriteMoviesCounterToggle,
  onOpenMovie,
  isFavorite,
}) {
  // const card = {img: '', name: 'Interstellar', rating: 8.7, genres: ["Sci-Fi , Drama"], popular: true, isFavorite: true}
  return (
    <li className={cardStyles.card} onClick={() => onOpenMovie(card)}>
      {/* <button className={cardStyles.card}> */}
      <div className={cardStyles.image}>
        <img
          className={cardStyles.image}
          src={card.image}
          alt={card.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = breakIcon;
          }}
        />
      </div>

      <div className={cardStyles.wrapper}>
        <h2 className={cardStyles.title}>{card.name}</h2>
        <div className={cardStyles.container}>
          <span className={cardStyles.rating}>
            {" "}
            <FaStar className={cardStyles["raiting-icon"]} /> {card.rating}
          </span>

          <ul className={cardStyles.genres}>
            {card.genre.map((item, index) => {
              return (
                <li className={cardStyles.genre} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={cardStyles.tabs}>
        {card.popular && <span className={cardStyles.popular}>Popular</span>}
        {card.new && <span className={cardStyles.new}>New</span>}
      </div>

      {/* {card.favorites && <span className={cardStyles.favorite}><FaHeart className={cardStyles["favorite-icon"]}/></span>} */}
      <LikeButton
        liked={isFavorite}
        favoriteMoviesCounterToggle={favoriteMoviesCounterToggle}
        likeBtnStyles={cardStyles.favorite}
        likeIconStyles={cardStyles["favorite-icon"]}
        movie={card}
      />
      {/* </button> */}
    </li>
  );
}

MovieCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    popular: PropTypes.bool,
    isFavorite: PropTypes.bool,
  }),
};
