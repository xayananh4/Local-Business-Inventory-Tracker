import React from 'react';
import PropTypes from 'prop-types';
import CoffeeClass from './CoffeeClass';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.mainCoffeeList.map((coffee, index) =>
        <CoffeeClass
          name={coffee.name}
          origin={coffee.origin}
          price={coffee.price}
          roast={coffee.roast}
          poundsLeft={coffee.poundsLeft}
          key={coffee.id}
          onSellPound={ () => {
            props.onSellPound(coffee.id);
          }}

        />
      )}
    </React.Fragment>
  );
}


CoffeeList.propTypes = {
  mainCoffeeList: PropTypes.array
};

export default CoffeeList;
