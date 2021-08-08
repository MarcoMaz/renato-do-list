/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home } from './views/Home';
import { View } from './views/View';
import { Button } from './components/Button';

function App() {
  return (
    <Router>
      <div className="App">
        learn react
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/view">View</Link>
          </li>
        </ul>
        <Button label="button" />
      </div>
      <Switch>
        <Route exact path="/">
          <Home label="home" />
        </Route>
        <Route path="/view">
          <View label="view" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
