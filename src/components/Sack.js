import React from "react";
import PropTypes from "prop-types";

function Sack(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenSackClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.origin}</h3>
        <h3>{props.price}</h3>
        <h3>{props.roast}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Sack.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string, // new PropType
  whenSackClicked: PropTypes.func // new PropType
};

export default Sack;