import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditSackForm(props) {
  const { sack } = props;

  function handleEditingSackFormSubmission(event) {
    event.preventDefault();
    props.onEditSack({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: sack.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditingSackFormSubmission} 
        buttonText="Edit sack" />
    </React.Fragment>
  )
}

EditSackForm.propTypes = {
sack: PropTypes.object,
onEditSack: PropTypes.func
};

export default EditSackForm;