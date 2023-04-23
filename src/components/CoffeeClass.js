import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      {/* <div onClick = {() => props.whenCoffeeClicked(props.id)}> */}
      
      {/* <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p> */}
    
        {/* </div> */}
    </React.Fragment>
  );
}

Coffee.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Coffee;

