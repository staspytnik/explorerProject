// export default function Product(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.name} />
//       <h2>{props.name}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// }

import PropTypes from "prop-types";

export default function Product({
  image,
  name,
  description,
  year,
  type,
  isPopular = false,
  ratingParam,
}) {
  console.log();

  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.number,
  type: PropTypes.string,
  isPopular: PropTypes.bool,
  ratingParam: PropTypes.number,
};
