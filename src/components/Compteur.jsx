import React, { Component } from "react";
class Compteur extends Component {
  constructor() {
    super();
    this.state = {
      compteur: 0,
    };
  }
  incrementer = () => {
    this.setState({ compteur: this.state.compteur + 1 });
  };
  render() {
    return (
      <div>
        <p>la valeur du compteur est:{this.state.compteur}</p>
        <button onClick={this.incrementer}>incrementer</button>
      </div>
    );
  }
}
export default Compteur;
