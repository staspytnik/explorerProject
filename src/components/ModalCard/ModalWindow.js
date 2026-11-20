import { Component } from "react";
import styles from "./ModalWindow.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import breakIcon from "../../assets/images/brokenimage.png";

export default class ModalCard extends Component {
  render() {
    const { name, description, type, release, genre, rating, image } =
      this.props;
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          {image && (
            <img
              className={styles.image}
              src={image}
              alt={name}
              onError={(e) => {
                e.currentTarget.src = breakIcon;
              }}
            />
          )}

          <div className={styles.content}>
            {type && (
              <span className={styles.type}>
                {type === "cartoon" ? "мультфільм" : "фільм"}
              </span>
            )}
            {name && <h3 className={styles.title}>{name}</h3>}
            <div className={styles.meta}>
              {rating && (
                <span className={styles.rating}>
                  <FaStar className={styles.star} />
                  {rating}
                </span>
              )}
              {release && <span className={styles.release}>{release}</span>}
            </div>

            <ul className={styles.genres}>
              {genre &&
                genre.map((item, index) => (
                  <li key={index} className={styles.genre}>
                    {item}
                  </li>
                ))}
            </ul>

            {description && <p className={styles.description}>{description}</p>}
          </div>

          <button className={styles.close} onClick={this.props.onClose}>
            <IoMdCloseCircleOutline />
          </button>
        </div>
      </div>
    );
  }
}
