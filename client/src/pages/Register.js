import React from 'react';
import { Header } from '../components';
import { create } from '../api'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async signUp({ target }) {
    const { history } = this.props;
    let name = target.previousSibling.childNodes[1].value
    let username = target.previousSibling.childNodes[3].value
    let pass = target.previousSibling.childNodes[5].value
    const user = await create(name, username, pass);
    if (user.error && user.code === 'conflict') {
      window.alert('Usuário já existente')
      for (let index = 0; index < 3; index+= 1) {
        document.getElementsByClassName('input')[index].value = '';
      }
    }
    if (user.message) {
      history.push('./');
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="register-container">
       <Header history = { history } />
        <div className="register-form">
          <span>Nome Completo</span>
          <input
            name="name"
            className="input"
          />
          <span>Usuário</span>
          <input
            name="username"
            className="input"
          />
          <span>Senha</span>
          <input
            name="password"
            type="password"
            className="input"
          />
        </div>
        <button
          type="button"
          data-testid="signup-btn"
          onClick={ (event) => this.signUp(event) }
        >
          Cadastrar
        </button>
      </div>
    );
  }
}

export default Login;
