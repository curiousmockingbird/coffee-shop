import React from "react";
import PropTypes from "prop-types";

function SackDetails(props){
  const { sack, onClickingDelete, onClickingSell } = props;

  return (
    <React.Fragment>
      <h1>Sack Details:</h1>
      <h3>Name:{sack.name}</h3>
      <p><em>Origin: {sack.origin}</em></p>
      <p><em>Price: ${sack.price}</em></p>
      <p><em>Roast: {sack.roast}</em></p>
      <p><em>Quantity on stock: {sack.quantity} pounds</em></p>
      <button onClick={ props.onClickingEdit }>Update sack</button>
      <button onClick={()=> onClickingDelete(sack.id) }>Delete from inventory</button> 
      <button onClick={()=> onClickingSell(sack.id) }>Sell</button> 
      <hr/>
    </React.Fragment>
  );
}

SackDetails.propTypes = {
  sack: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default SackDetails;