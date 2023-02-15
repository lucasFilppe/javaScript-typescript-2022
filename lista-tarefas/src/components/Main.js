import { render } from "@testing-library/react";
import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Meu componente estado</h1>
      </div>
    );
  }

}
export default Main;
