import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    count: 0,
    increaseCount: 0,
  };

  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  add100 = () => {
    this.setState(prevState => ({
      count: prevState.count + 100,
    }));
  };

  increase = () => {
    if (this.state.increaseCount % 5 === 0) {
      this.add100();
    }

    this.addOne();
    this.setState(prevState => ({
      increaseCount: prevState.increaseCount + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>
          {`Count: ${this.state.count}`}
        </h1>
        <button type="button" onClick={this.addOne}>
          addOne
        </button>
        <button type="button" onClick={this.add100}>
          add100
        </button>
        <button type="button" onClick={this.increase}>
          increase
        </button>
      </>
    );
  }
}

export default App;