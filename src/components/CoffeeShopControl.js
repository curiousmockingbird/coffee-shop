import React from "react";
import CoffeeShopMenu from "./CoffeeShopMenu";
import SackDetails from "./SackDetails";
import NewSackForm from "./NewSackForm";
import EditSackForm from "./EditSackForm.js";

class CoffeeShopControl extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSackList: [],
      selectedSack: null,
      editing: null
    };
  }

  handleClick(){

  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}