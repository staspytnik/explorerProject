import { Component } from "react";
import styles from "./SearchInput.module.css";

// export default function SearchInput() {
//   return (
//     <input
//       className={styles.search}
//       type="search"
//       placeholder="Search movies..."
//     />
//   );
// }

export default class SearchInput extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <>
        <input
          className={styles.search}
          value={this.state.text}
          onChange={this.handleChange}
          type="search"
          placeholder="Search movies..."
        />

        {/* <p>Text: {this.state.text}</p> */}
      </>
    );
  }
}
