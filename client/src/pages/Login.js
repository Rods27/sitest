import React from 'react';
import { Header } from '../components';
import { login } from '../api'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  async signIn({ target }) {
    const { history } = this.props;
    const username = target.parentNode.parentNode.firstChild.childNodes[1].value;
    const password = target.parentNode.parentNode.firstChild.childNodes[3].value;
    if(username && password){
      const users = await login(username, password);
      if (users.statusText) {
        window.alert('Usuário ou senha incorreta.')
      } else {
        localStorage.setItem('token', users.token)
        history.push({
          pathname: '/albuns',
          state: { userid: users.id }
        });
      }
    } else {
      window.alert("Usuário e senha não podem estar em branco!")
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="login-container">
        <Header history = { history } />
        <div className="login-div">
          <div className="input-div">
            <span>Usuário</span>
            <input
              name="username"
              placeholder="Digite o nome de usuário"
            />
            <span>Senha</span>
            <input
              name="password"
              type="password"
              placeholder="Digite sua Senha"
            />
          </div>
          <div className="button-div">
            <button
              type="button"
              className="btn-login"
              onClick={ (event) => this.signIn(event) }
            >
              Entrar
            </button>
            <button
              type="button"
              className="btn-create"
              onClick={ () => history.push('/register') }
            >
              Ainda não tenho conta
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
