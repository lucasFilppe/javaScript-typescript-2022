import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css"
class Main extends Component {

    state = {
      novaTarefa: '',
    };

    handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value
    });
  }

  render() {

    const {novaTarefa} = this.state//

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#">
          <input  onChange={this.handleChange} type="text"/> {/*Onchange chama uma função quando o usuario alterar o campo do input*/}
          <button type="submit">Enviar</button>
          <p>{novaTarefa}</p>
        </form>
      </div>
    );
  }

}
export default Main;
