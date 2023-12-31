import {Component} from 'react'

class Button extends Component {
    
    state = {}
    constructor(props) {
        super(props)
        console.log('Ejecutando constructor', props);
    }
    componentDidMount() {
        console.log('Ejecutando componentDidMount');
    }
    componentDidUpdate(prevProps,prevState) {
        console.log('Ejecutando componentDidUpdate', prevProps,prevState);
    }

    componentWillUnmount() {
        console.log('Ejecutando componentWillUnmount',this.props, this.state);
    }

    render() {
        console.log('Ejecutando render');
        return (
            <button onClick={() => this.setState({prop:1})}>Enviar</button>
        )
    }
}

class App extends Component {
    state = {
        valor: 3
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>React App</h1>
                {this.state.valor === 3 ? <Button chanchito='feliz'/>: null}
                <button className={`${this.state.valor}`} onClick={() => this.setState({valor: 2})}>Enviar En App</button>
            </div>
        )
    }
}

export default App