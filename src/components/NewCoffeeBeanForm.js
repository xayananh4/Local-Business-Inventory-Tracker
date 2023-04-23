import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import { v4 } from 'uuid'; // new code

function NewCoffeeBeanForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeFormCreation({
    name: event.target.name.value,
    origin: event.target.origin.value,
    price: event.target.price.value,
    roast: event.target.roast.value,
    id: v4()
    });
  }

  // function handleNewTicketFormSubmission(event) {
  //   event.preventDefault();
  //   props.onNewTicketCreation({
  //     names: event.target.names.value,
  //     location: event.target.location.value,
  //     issue: event.target.issue.value,
  //     id: v4()
  //   });
  // }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />

        <input
          type='text'
          name='origin'
          placeholder='Origin' />

        <input
          type='text'
          name='price'
          placeholder='Price' />

        <input
          type='text'
          name='roast'
          placeholder='Roast' />

        <textarea
          name='coffeeBrand'
          placeholder='Tell you to add coffeeBrand' />

        <button type='submit'>Add coffeeBrand</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewCoffeeFormCreation: PropTypes.func
};

export default NewCoffeeBeanForm;