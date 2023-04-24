import React from 'react';
import PropTypes from 'prop-types';

function CoffeeClass(props) {
  return (
    <section>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h2>{props.name}</h2>
      </div>
      <div>
        <p>Pounds left: {props.poundsLeft}</p>
        <button onClick={props.onSellPound}>Sell 1 Pound of {props.name} Coffee</button>
      </div>
    </section>
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
