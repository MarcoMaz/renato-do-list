/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Styling
import './App.scss';

// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { useAppSelector, useAppDispatch } from './state/hooks';
import { decrement, increment } from './state/counterSlice';
import store from './state/store';

// Views
import { Home } from './views/Home';
import { View } from './views/View';

// Components
import { Button } from './components/Button';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <div>
            <button
              type="button"
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              type="button"
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <h1>{count}</h1>
          </div>
          <hr />
          Views
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
          </ul>
          <hr />
          <Button label="button" />
        </div>
      </Provider>
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
