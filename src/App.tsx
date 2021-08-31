/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Styling
import './App.scss';

// Redux
import { Provider } from 'react-redux';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './state/hooks';
import { addTodo, toggleTodo, removeTodo } from './state/counterSlice';
import store from './state/store';

function App() {
  const todos = useAppSelector((state) => state.counter);
  const completedTodos = useAppSelector((state) =>
    state.counter.map((todo) => todo.isCompleted),
  );

  const thingsTotal = todos.length;
  const thingsDone = completedTodos.filter(Boolean).length;
  const thingsTodo = thingsTotal - thingsDone;
  const dispatch = useAppDispatch();

  const [label, setLabel] = useState('');
  const [speed, setSpeed] = useState(0);
  const [urgency, setUrgency] = useState(0);
  const [fun, setFun] = useState(0);

  const [showCreateNew, setShowCreateNew] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addTodo({
        label,
        speed,
        urgency,
        fun,
      }),
    );
    setLabel('');
    setShowCreateNew(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Provider store={store}>
      <div className="App">
        <h2>
          Things to do <span>{`(${thingsTodo}/${thingsTotal})`}</span>
        </h2>
        <ul>
          {todos
            .filter((todo) => !todo.isCompleted)
            .sort((a, b) => a.total - b.total)
            .map(({ id, isCompleted, total }) => (
              <li key={id}>
                <input
                  value={id}
                  onChange={() => dispatch(toggleTodo(id))}
                  type="checkbox"
                  checked={isCompleted}
                />
                {label}
                <button onClick={() => dispatch(removeTodo(id))} type="button">
                  X
                </button>
                <br />
                <small> speed: {speed} </small>
                <small> urgency: {urgency} </small>
                <small> funny: {fun} --- </small>
                <strong> total: {total} </strong>
              </li>
            ))}
        </ul>
        <h2>
          Things done <span>{`(${thingsDone}/${thingsTotal})`}</span>
        </h2>
        <ul>
          {todos
            .filter((todo) => todo.isCompleted)
            .map((todo, index) => (
              <li key={index}>{todo.label}</li>
            ))}
        </ul>
        <button type="button" onClick={() => setShowCreateNew(true)}>
          ADD TODO
        </button>
        {showCreateNew && (
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Add todo..."
              value={label}
              onChange={(event) => setLabel(event.target.value)}
            />
            <button type="submit">Submit</button>
            <br />
            <label htmlFor="speed">
              <select
                name="speed"
                id="speed"
                onChange={(e) => setSpeed(Number(e.target.value))}
              >
                <option value={1}>slow</option>
                <option value={2}>medium</option>
                <option value={3}>fast</option>
              </select>
            </label>
            <br />
            <label htmlFor="urgency">
              <select
                name="urgency"
                id="urgency"
                onChange={(e) => setUrgency(Number(e.target.value))}
              >
                <option value={1}>non-urgent</option>
                <option value={100}>urgent</option>
              </select>
            </label>
            <br />
            <label htmlFor="fun">
              <select
                name="fun"
                id="fun"
                onChange={(e) => setFun(Number(e.target.value))}
              >
                <option value={1}>funny</option>
                <option value={3}>NOT funny</option>
              </select>
            </label>
            <button type="button" onClick={() => setShowCreateNew(false)}>
              Click me if you change your mind
            </button>
          </form>
        )}
      </div>
    </Provider>
  );
}

export default App;
