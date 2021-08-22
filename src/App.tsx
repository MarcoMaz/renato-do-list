/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Styling
import './App.scss';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './state/hooks';
import { addTodo, toggleTodo, removeTodo } from './state/counterSlice';
import store from './state/store';

// Views
import { Home } from './views/Home';
import { View } from './views/View';

// Components

function App() {
  const heroes = useAppSelector((state) => state.counter);
  const heroes2 = useAppSelector((state) =>
    state.counter.map((x) => x.isCompleted),
  );

  const thingsTotal = heroes.length;
  const thingsDone = heroes2.filter(Boolean).length;
  const thingsTodo = thingsTotal - thingsDone;
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const [velox, setVelox] = useState(0);
  const [urg, setUrg] = useState(0);
  const [funny, setFunny] = useState(0);

  const [showTodo, setShowTodo] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addTodo({
        label: value,
        speed: velox,
        urgency: urg,
        fun: funny,
      }),
    );
    setValue('');
    setShowTodo(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <h2>
            Cose da fare <span>{`(${thingsTodo}/${thingsTotal})`}</span>
          </h2>
          <ul>
            {heroes
              .filter((x) => !x.isCompleted)
              .sort((a, b) => a.total - b.total)
              .map((hero) => (
                <li key={hero.id}>
                  <input
                    value={hero.id}
                    onChange={() => dispatch(toggleTodo(hero.id))}
                    type="checkbox"
                    checked={hero.isCompleted}
                  />
                  {hero.label}
                  <button
                    onClick={() => dispatch(removeTodo(hero.id))}
                    type="button"
                  >
                    X
                  </button>
                  <br />
                  <small> speed: {hero.speed} </small>
                  <small> urgency: {hero.urgency} </small>
                  <small> funny: {hero.fun} --- </small>
                  <strong> total: {hero.total} </strong>
                </li>
              ))}
          </ul>
          <h2>
            Cose fatte <span>{`(${thingsDone}/${thingsTotal})`}</span>
          </h2>
          <ul>
            {heroes
              .filter((x) => x.isCompleted)
              .map((x, index) => (
                <li key={index}>{x.label}</li>
              ))}
          </ul>
          <button type="button" onClick={() => setShowTodo(true)}>
            ADD TODO
          </button>
          <br />
          <br />
          {showTodo && (
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Add todo..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
              <br />
              <label htmlFor="lunghezza">
                <select
                  name="lunghezza"
                  id="lunghezza"
                  onChange={(e) => setVelox(Number(e.target.value))}
                >
                  <option value={1}>lento</option>
                  <option value={2}>medio</option>
                  <option value={3}>veloce</option>
                </select>
              </label>
              <br />
              <label htmlFor="urgenza">
                <select
                  name="urgenza"
                  id="urgenza"
                  onChange={(e) => setUrg(Number(e.target.value))}
                >
                  <option value={1}>non-urgente</option>
                  <option value={100}>urgente</option>
                </select>
              </label>
              <br />
              <label htmlFor="fun">
                <select
                  name="fun"
                  id="fun"
                  onChange={(e) => setFunny(Number(e.target.value))}
                >
                  <option value={1}>funny</option>
                  <option value={3}>NOT funny</option>
                </select>
              </label>
              <button type="button" onClick={() => setShowTodo(false)}>
                Click me if you change your mind
              </button>
            </form>
          )}
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
