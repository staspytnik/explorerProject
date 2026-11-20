import styles from "./SectionMovies.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SectionMovies({ title, description, link, children }) {
  return (
    <section>
      <div className="container">
        <div className={styles.content}>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
          {link && (
            <a className={styles.link} target="_blank" href={link.href}>
              {link.text} <FaArrowRightLong className={styles["link-icon"]} />
            </a>
          )}{" "}
        </div>
        {children}
      </div>
    </section>
  );
}
