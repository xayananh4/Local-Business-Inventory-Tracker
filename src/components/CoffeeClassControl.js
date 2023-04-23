import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeBeanForm from './NewCoffeeBeanForm';

class CoffeeClassControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      //populate a default coffee brand to user 
      mainCoffeeList: [
        {
          name: "Ethiopia",
          origin: "Ethiopia",
          price: 15,
          roast: "Light",
          poundsLeft: 130,
          id: 1
        }
      ],
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }


  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeBeanForm onNewCoffeeFormCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffeee List";
    }
    else {
      currentlyVisibleState = <CoffeeList mainCoffeeList={this.state.mainCoffeeList} />;
      buttonText = "Add to coffeee List";

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}

        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}

      </React.Fragment>
    );
  }
}

export default CoffeeClassControl;
