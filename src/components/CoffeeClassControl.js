import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeBeanForm from './NewCoffeeBeanForm';

class CoffeeClassControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
      mainCoffeeList: [] // new code
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeBeanForm />
       buttonText = "Return to Coffeee List"; 
    } else {
      currentlyVisibleState = <CoffeeList />
       buttonText = "Add to coffeee List"; 

    }
    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }
}

export default CoffeeClassControl;
