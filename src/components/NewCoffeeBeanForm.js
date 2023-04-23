import React from "react";

function NewCoffeeBeanForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.roast.value);

  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Pair Names' />

        <input
          type='text'
          name='origin'
          placeholder='Location' />

        <input
          type='text'
          name='price'
          placeholder='Location' />

        <input
          type='text'
          name='roast'
          placeholder='roast' />

        <textarea
          name='coffeeBrand'
          placeholder='tell you to add coffeeBrand' />

        <button type='submit'>Add coffeeBrand</button>
      </form>
    </React.Fragment>
  );
}

export default NewCoffeeBeanForm;