import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";

//form
import { FaPlus } from "react-icons/fa";

//tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";
class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas , index} = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return; //indexOf retorna a posição de um valor especificado do array

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    }else{
      novasTarefas[index] = novaTarefa

      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { traefas } = this.state;
    this.setState({
      index,
      novaTarefa: traefas[index],
    });
    console.log("edit", index);
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novaTarefas],
    });
    console.log("delete", index);
  };

  render() {
    const { novaTarefa, tarefas } = this.state; //

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          {" "}
          {/*o evento onSubimit ocorre quando um formulario é enviado */}
          <input
            onChange={
              this.handleChange
            } /*Onchange chama uma função quando o usuario alterar o campo do input*/
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <button>
                  <FaEdit
                    className="edit"
                    onClick={(e) => this.handleEdit(e, index)}
                  />
                </button>
                <button>
                  <FaWindowClose
                    className="delete"
                    onClick={(e) => this.handleDelete(e, index)}
                  />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Main;
