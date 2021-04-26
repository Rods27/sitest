import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { history } = this.props; 
    if (history.location.pathname !== '/') {
      document.getElementsByTagName('h1')[0].innerText = 'Albuns - Editar';
    }
    if (history.location.pathname === '/create') {
      document.getElementsByTagName('h1')[0].innerText = 'Criar novo album';
    }
    if (history.location.pathname === '/register') {
      document.getElementsByTagName('h1')[0].innerText = 'Register';
    }
    if (history.location.pathname === '/albuns') {
      document.getElementsByTagName('h1')[0].innerText = 'Albuns';
    }
  }
  render() {
    return (
      <div className="header-container">
        <h1>Login</h1>
      </div>
    );
  }
}

export default Header;
