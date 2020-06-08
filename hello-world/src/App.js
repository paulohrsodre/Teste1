import React, { Component } from 'react';
import Mensagem from './Components/Mensagem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: 'Digite seu nome... ',
    }
  }

  handlerChange = (e) => {
    let message = (e.target.value === '') ? 'Digite seu nome... ' : 'olá,' + e.target.value;
    this.setSate({...this.state, message: message});
  }

    render() {
        return(
          <div>
          <input type="text" onChange={this.handlreChange}/>
          <Mensagem message={this.state.message}/>
        </div>
        )
    }
}
export default App;
