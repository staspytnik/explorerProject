import styles from "./Header.module.css";

export default function Header({ children }) {
  const links = ["Home", "Movies", "Favorites"];
  /* Вбудовані стилі - стилі які задаються через атрибут style напряму */
  let headerStyle;
  const isAuthorized = true;

  if (isAuthorized) {
    headerStyle = {
      backgroundColor: "black",
    };
  } else {
    headerStyle = {
      backgroundColor: "lightgray",
    };
  }
  return (
    // <header style={{ padding: "18px 0" }}>
    <header className={styles.header} style={headerStyle}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          Movie<span>Explorer</span>
        </a>
        <ul className={styles.menu}>
          {links.length > 0 &&
            links.map((link, index) => (
              <li key={index}>
                <a className={styles.link} href={`#${link}`}>
                  {link}
                </a>
              </li>
            ))}
        </ul>

        {children}
      </div>
    </header>
  );
}
