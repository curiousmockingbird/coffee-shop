import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewSackForm(props) {

  function handleNewSackFormSubmission(event) {
    event.preventDefault();
    props.onNewSackCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h5>Add the details for the new sack of coffee!</h5>
      <ReusableForm
        formSubmissionHandler={handleNewSackFormSubmission} 
        buttonText="Add" />
    </React.Fragment>
  )
}

NewSackForm.propTypes = {
onNewSackCreation: PropTypes.func
};

export default NewSackForm;