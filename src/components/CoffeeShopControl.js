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
  handleEditingSackInList(){

  }
  handleDeletingSack(){

  }
  handleEditingSack(){

  }
  handleSellingCoffee(){

  }
  handleAddingNewSackToList(){

  }
  handleChangingSelectedSack(){

  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditSackForm 
      sack = {this.state.selectedSack} 
      onEditSack = {this.handleEditingSackInList} />
      buttonText= "Return to menu";
    }else if(this.state.selectedSack != null) {
      currentlyVisibleState = <SackDetails
      sack = {this.state.selectedSack} 
      onClickingDelete = {this.handleDeletingSack}
      onClickingEdit = {this.handleEditingSack}
      onClickingSell = {this.handleSellingCoffee} />
      buttonText= "Return to menu";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSackForm 
      onNewSackCreation = {this.handleAddingNewSackToList} />
      buttonText= "Return to menu";
    } else {
      currentlyVisibleState = <CoffeeShopMenu 
      coffeeShopMenu = {this.state.mainSackList}
      onClickingOnSack = {this.handleChangingSelectedSack}/>
      buttonText= "Add burlap sack to inventory";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default CoffeeShopControl