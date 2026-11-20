import PropTypes from "prop-types";
import styled from "styled-components";
import { FaPlay, FaPlus, FaStar } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero({ movie }) {
  // const movie = {
  //   title: "Interstellar",
  //   rating: 8.7,
  //   release: 2014,
  //   genre: ["Sci-Fi", "Drama"],
  //   description:
  //     "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //   id: "1024",
  // };

  const FeaturedSpan = styled.span`
    font-family: "Outfit", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #a78bfa;
    border: 1px solid rgba(167, 139, 250, 0.3);
    padding: 4px 12px;
    border-radius: 9999px;
    background: rgba(124, 58, 237, 0.1);
  `;

  const Button = styled.button`
    font-family: "Outfit", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
    text-align: center;
    color: #ffffff;
    border-radius: 12px;
    padding: 12px 24px;
    background: ${(props) =>
      props.$primary
        ? "linear-gradient(105.6deg, #7c3aed 0.07%, #3b82f6 99.93%)"
        : "rgba(255, 255, 255, 0.1)"};
    box-shadow: ${(props) =>
      props.$primary ? "0px 8px 24px rgba(124, 58, 237, 0.4)" : "none"};
    border: ${(props) =>
      props.$primary ? "none" : "1px solid rgba(255, 255, 255, 0.2)"};
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
  `;

  return (
    <section className={`section ${styles.hero}`}>
      <div className="container">
        <FeaturedSpan>✦ Featured Movie</FeaturedSpan>
        <h1 className={styles.title}>{movie.name}</h1>
        <div className={styles.wrapper}>
          <span className={styles.rating}>
            {" "}
            <FaStar className={styles.star} /> {movie.rating}
          </span>
          <div className={styles.dot}></div>
          <span className={styles.info}>{movie.release}</span>
          <div className={styles.dot}></div>
          <ul className={styles.genres}>
            {movie.genre.length > 0 ? (
              movie.genre.map((item, index) => (
                <li key={index} className={styles.info && styles.genre}>
                  {item}
                </li>
              ))
            ) : (
              <li className={styles.info}>Genres not found</li>
            )}
          </ul>
        </div>
        <p className={styles.description}>"{movie.description}"</p>
        <Button $primary>
          <FaPlay />
          Watch Trailer
        </Button>
        <Button>
          <FaPlus />
          Add to Favorites
        </Button>
      </div>
    </section>
  );
}

Hero.propTypes = {
  movie: PropTypes.object,
};
