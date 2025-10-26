import { Component, Fragment } from "react";

class Counter extends Component {
    state = {
        count: 0
    };
    add = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
        this.props.info(this.state.count)
    };
    remove = () => {
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    };

    render() {
        return (<>
            <button onClick={this.add}>Plus 1</button>
            <button onClick={this.remove}>Minus 1</button>
            <h1>Counter: {this.state.count}</h1>
        </>)
    }
}

export default Counter;