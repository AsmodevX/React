import React, {Component} from "react";

class Test extends Components {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    ComponentDidMount() {
        console.log('hola!')
    }

    ComponentDidUpdate(prevProps, prevState) {
        console.log('hola2')
    }

    ComponentWillUnmount() {
        console.log('El componente se va a desmontar.');
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render () {
        return (
            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        );
    }
}

export default Test;