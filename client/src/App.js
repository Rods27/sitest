import './styles/main.scss'
import { Route, Switch } from 'react-router-dom';
import { Login, Register, Albuns, Details, Create } from './pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={ Login } />
        <Route exact path ="/register" component={ Register } />
        <Route exact path ="/albuns" component={ Albuns } />
        <Route exact path ="/albuns/:id" component={ Details } />
        <Route exact path ="/create/" component={ Create } />
      </Switch>
    </div>
  );
}

export default App;
