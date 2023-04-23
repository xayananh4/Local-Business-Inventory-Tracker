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
    poundsLeft: 130,
    id: v4()
    });
  }


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

        <button type='submit'>Add coffee Brand</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewCoffeeFormCreation: PropTypes.func
};

export default NewCoffeeBeanForm;