import React from "react";
import Sack from "./Sack";
import PropTypes from "prop-types";


function SackList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.sackList.map((sack) =>
      <Sack name={sack.name}
      whenSackClicked = { props.onClickingOnSack }
      id={sack.id}
      key={sack.id}/>
      )}
    </React.Fragment>
  );
}

SackList.propTypes = {
  coffeeShopMenu: PropTypes.array,
  onClickingOnSack: PropTypes.func
}

export default SackList;