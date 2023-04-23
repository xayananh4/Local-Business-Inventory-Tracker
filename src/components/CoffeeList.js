import React from 'react';
import PropTypes from 'prop-types';
import CoffeeClass from './CoffeeClass';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((ticket, index) =>
        <CoffeeClass
          // whenTicketClicked = { props.onTicketSelection }
          name={ticket.names}
          origin={ticket.origin}
          price={ticket.price}
          roast={ticket.roast}
          poundsLeft={ticket.poundsLeft}
         // id={ticket.id} Note that we also have to pass in an id prop. 
          //This is because we can't pass a key to a child component as a prop. 
          //However, our Ticket component will still need access to its own id, 
          //hence a separate id prop which is also set to ticket.id
          key={index} />
      )}
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
CoffeeList.propTypes = {
  mainCoffeeList: PropTypes.array
};

export default CoffeeList;
