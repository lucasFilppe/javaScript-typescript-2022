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
      tarefas: [],
    };

    handleSubmit = (e) =>{
      e.preventDefault();
      
      const {tarefas} = this.state;
      let {novaTarefa} = this.state;
      novaTarefa = novaTarefa.trim();

      if(tarefas.indexOf(novaTarefa) !== -1) return;//indexOf retorna a posição de um valor especificado do array

      const novasTarefas = [...tarefas];
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
      });
    }

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
        <form onSubmit={this.handleSubmit} action="#" className="form"> {/*o evento onSubimit ocorre quando um formulario é enviado */}
          <input  
            onChange={this.handleChange} /*Onchange chama uma função quando o usuario alterar o campo do input*/
            type="text"
            value={novaTarefa}
          /> 
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
