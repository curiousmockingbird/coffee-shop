import React from "react";
import Sack from "./Sack";
import PropTypes from "prop-types";


function CoffeeShopMenu(props){
  return (
    <React.Fragment>
      <hr/>
      {props.coffeeShopMenu.map((sack) =>
      <Sack name={sack.name}
      origin={sack.origin}
      price={sack.price}
      roast={sack.roast}
      whenSackClicked = { props.onSackSelection }
      id={sack.id}
      key={sack.id}/>
      )}
    </React.Fragment>
  );
}

CoffeeShopMenu.propTypes = {
  coffeeShopMenu: PropTypes.array,
  onSackSelection: PropTypes.func
}

export default CoffeeShopMenu;