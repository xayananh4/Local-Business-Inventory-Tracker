import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Pounds left: {coffee.poundsLeft}</p>
      <button onClick={coffee.onSellPound}>Sell 1 Pound Of Coffee</button>
      <hr/>
    </React.Fragment>
  );
}
CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};
export default CoffeeDetail;