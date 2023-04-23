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
    this.handleSellingPound = this.handleSellingPound.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      //either set the formVisibleOnPage to: true/false
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

  handleSellingPound(id) {
   
    const coffee = this.state.mainCoffeeList.find(function (coffee) {
      return coffee.id === id;
    });

  
    if (coffee && coffee.poundsLeft > 0) {
      // Decrement the number of pounds left
      coffee.poundsLeft--;

      // Update the state with the new mainCoffeeList
      this.setState({
        mainCoffeeList: [...this.state.mainCoffeeList]
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {

      currentlyVisibleState = <NewCoffeeBeanForm onNewCoffeeFormCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffee List";

    }
    else {
      currentlyVisibleState = (
        <CoffeeList
          mainCoffeeList={this.state.mainCoffeeList}
          onSellPound={this.handleSellingPound}
        />
      );


      buttonText = "Add To Coffee List";

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
