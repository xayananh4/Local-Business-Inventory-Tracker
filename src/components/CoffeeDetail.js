import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>

      <p>ID: {coffee.id}</p>
      <p>Origin: {coffee.origin}</p>
      <p>Price: ${coffee.price}</p>
      <p>Roast: {coffee.roast}</p>


       {/* <button onClick={ () => coffee.onSellPound(coffee.id)}>Sell 1 Pound Of Coffee</button> */}
     
      
      <hr/>
    </React.Fragment>
  );
}


CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onSellPound: PropTypes.func,
};
export default CoffeeDetail;