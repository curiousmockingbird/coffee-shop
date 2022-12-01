import React from "react";
import SackList from "./SackList";
import SackDetails from "./SackDetails";
import NewSackForm from "./NewSackForm";
import EditSackForm from "./EditSackForm";

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

  handleClick =() => {
    if(this.state.selectedSack != null){
      this.setState({
        formVisibleOnPage: false,
        selectedSack: null,
        editing: false
      });
    } else {
      this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}))
    }
  }
  handleEditingSackInList = (sackToEdit) => {
    const editedMainSackList = this.state.mainSackList
    .filter(sack  => sack.id !== this.state.selectedSack.id)
    .concat(sackToEdit);
    this.setState({
      mainSackList: editedMainSackList,
      editing: false,
      selectedSack: null
    });
  }
  handleDeletingSack = (id) => {
    const newMainSackList = this.state.mainSackList
    .filter(sack  => sack.id !== id)
    this.setState({
      mainSackList: newMainSackList,
      selectedSack: null
    });
  }
  handleEditingSack = () => {
    this.setState({editing: true});
  }
  handleSellingCoffee = (id) => {
    const sack = this.state.mainSackList
    .filter(sack => sack.id === id)[0];

    if(sack.quantity > 0) {
      sack.quantity-= 1;
      this.setState({
      selectedSack: sack
    });
    } else {
      this.setState({
      selectedSack: sack
      })
    }
  }
  handleAddingNewSackToList = (newSack) => {
    console.log(newSack);
    const newMainSackList = this.state.mainSackList.concat(newSack);
    this.setState({mainSackList: newMainSackList});
    this.setState({formVisibleOnPage: false});
  }
  handleChangingSelectedSack = (id) => {
    const selectedSack = this.state.mainSackList
    .filter(sack  => sack.id === id)[0];
    this.setState({selectedSack: selectedSack})
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
      currentlyVisibleState = 
      <NewSackForm 
      onNewSackCreation = {this.handleAddingNewSackToList} />
      buttonText= "Return to menu";
    } else {
      currentlyVisibleState = <SackList 
      sackList = {this.state.mainSackList}
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