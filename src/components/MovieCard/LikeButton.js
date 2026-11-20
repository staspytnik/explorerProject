import { Component } from "react";
import { FaHeart } from "react-icons/fa";

export default class LikeButton extends Component {
  state = { liked: false };

  toggleLike = (e) => {
    e.stopPropagation();
    const { movie, favoriteMoviesCounterToggle, liked } = this.props;
    favoriteMoviesCounterToggle(liked ? movie.id : movie);
  };
  render() {
    const { likeBtnStyles, likeIconStyles, liked } = this.props;
    return (
      <button onClick={this.toggleLike} className={likeBtnStyles}>
        <FaHeart
          className={likeIconStyles}
          style={{ color: liked ? "red" : "white" }}
        />
        ,
      </button>
    );
  }
}
