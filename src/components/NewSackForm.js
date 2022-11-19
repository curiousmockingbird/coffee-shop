import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewSackForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission} 
        buttonText="Add" />
    </React.Fragment>
  )
}

NewSackForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewSackForm;