import { act } from "react";
import Profile from "../Profile/Profile";
import styles from "./UserDetailButton.module.css";

export default function UserDetailButton({ favouriteMoviesCounter }) {
  const account = {
    name: "Alex",
    online: true,
    watchedMovies: 12,
    favoritesMovies: favouriteMoviesCounter,
    status: "Movie Lover",
  };
  return (
    <button className={styles.button}>
      <Profile name={account.name} online={account.online}></Profile>
      <div>
        <span className={styles.info}>
          🎬{account.watchedMovies} movies watched
        </span>
        <span className={styles.info}>
          ❤️ {account.favoritesMovies} favorite
        </span>
        <span className={styles.info}>{account.status}</span>
      </div>
    </button>
  );
}
