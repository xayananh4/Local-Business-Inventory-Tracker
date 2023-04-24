import React from 'react';
import PropTypes from 'prop-types';

function CoffeeClass(props) {
  return (
    <div onClick={() => props.whenCoffeeClicked(props.id)}>
      <h2>{props.name}</h2>
      {/* <p>Origin: {props.origin}</p>
      <p>Price: ${props.price}</p>
      <p>Roast: {props.roast}</p>
      <p>Pounds left: {props.poundsLeft}</p>
      <button onClick={props.onSellPound}>Sell 1 Pound Of Coffee</button> */}
    </div>
  );
}

CoffeeClass.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  poundsLeft: PropTypes.number.isRequired,
  onSellPound: PropTypes.func.isRequired,

  id: PropTypes.string, // new PropType
  whenTicketClicked: PropTypes.func // new PropType
};

export default CoffeeClass;
