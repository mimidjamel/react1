// src/components/FormulaireClass.jsx

import React, { Component } from 'react';

class FormulaireClass extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      message: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div>
        <h2>Formulaire - Composant Class</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          /><br />

          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={this.state.password}
            onChange={this.handleChange}
          /><br />

          <textarea
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea><br />

          <button type="submit">Envoyer</button>
        </form>

        {this.state.submitted && (
          <p style={{ color: "green" }}>Formulaire envoyé avec succès !</p>
        )}
      </div>
    );
  }
}

export default FormulaireClass;
