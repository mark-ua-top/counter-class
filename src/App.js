import './App.css';
import { Component } from 'react';
import Counter from './components/Counter/Counter';

class App extends Component {
  state = {
    count: 0
  }

  getCounterValue = (value) => {
    this.setState({ count: value });
  }
  render() {
    return (
      <div className="App" >
        <p>Підннятя стану {this.state.count}</p>
        <Counter info={this.getCounterValue} />
      </div>
    );
  }


}

export default App;
