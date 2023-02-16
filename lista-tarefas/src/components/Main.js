import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";

//form
import {FaPlus} from "react-icons/fa"

//tarefas
 import {FaEdit, FaWindowClose} from "react-icons/fa"
class Main extends Component {

    state = {
      novaTarefa: '',
      tarefas: [
        'fazer café',
        'beber água',
        'estudar',
      ],
    };

    handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value
    });
  }

  render() {

    const {novaTarefa, tarefas} = this.state//

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input  
            onChange={this.handleChange} 
            type="text"
            value={novaTarefa}
          /> {/*Onchange chama uma função quando o usuario alterar o campo do input*/}
          <button type="submit">
            <FaPlus/>
          </button>
        </form>

        <ul className="tarefas">

          {tarefas.map((tarefa) =>(
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit className="edit"/>
                <FaWindowClose className="delete"/>
              </div>
            </li>
          ))}

        </ul>
      </div>
    );
  }

}
export default Main;
