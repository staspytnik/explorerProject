import styles from "./Profile.module.css";
import PropTypes from "prop-types";
import { Component } from "react";

// export default function Profile({ name, online }) {
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.profile}>
//         <span>{name.slice(0, 1)}</span>

//         {online && <span className={styles.onlineDot}></span>}
//       </div>
//       <span className={styles.name}>{name}</span>
//     </div>
//   );
// }

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   online: PropTypes.bool.isRequired,
// };

export default class Profile extends Component {
  // constructor(props) {
  //     super(props)
  //     // this.state = {}
  // }

  render() {
    const { name, online } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <span>{name.slice(0, 1)}</span>
          {online && <span className={styles.onlineDot}></span>}
        </div>
        <span className={styles.name}>{name}</span>
      </div>
    );
  }
}
