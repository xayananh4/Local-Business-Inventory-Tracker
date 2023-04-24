import React from 'react';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
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
      formVisibleOnPage: false,
      selectedCoffee: null // new code
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSellingPound = this.handleSellingPound.bind(this);
  }


  handleClick() {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    }
    else {
      this.setState((prevState) => ({
        //either set the formVisibleOnPage to: true/false
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({ selectedCoffee: selectedCoffee });
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  handleSellingPound(id) {
    let coffee;
    this.state.mainCoffeeList.forEach(function (element) {
      if (element.id === id) {
        coffee = element;
      }
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

    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee={this.state.selectedCoffee}

      />
      buttonText = "Return to Coffee List";

    }


    else if (this.state.formVisibleOnPage) {

      currentlyVisibleState = <NewCoffeeBeanForm onNewCoffeeFormCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffee List";

    }

    else {
      currentlyVisibleState = (
        <CoffeeList
          mainCoffeeList={this.state.mainCoffeeList}
          onSellPound={this.handleSellingPound}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Add a new burlap sack of coffee";
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
