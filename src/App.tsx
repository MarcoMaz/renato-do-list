/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Styling
import './App.scss';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Redux
import { Provider } from 'react-redux';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from './state/hooks';
import { addTodo, toggleTodo, removeTodo } from './state/toDoSlice';
import store from './state/store';

const persistor = persistStore(store);

function App() {
  const todos = useAppSelector((state) => state.toDo);
  const completedTodos = useAppSelector((state) =>
    state.toDo.map((todo) => todo.isCompleted),
  );

  const numberOfThingsTotal = todos.length;
  const numberOfThingsDone = completedTodos.filter(Boolean).length;
  const numberOfThingsTodo = numberOfThingsTotal - numberOfThingsDone;
  const dispatch = useAppDispatch();

  const [itemText, setItemText] = useState('');
  const [speed, setSpeed] = useState(0);
  const [urgency, setUrgency] = useState(0);
  const [fun, setFun] = useState(0);
  const [itemDate, setItemDate] = useState('');

  const [showCreateNew, setShowCreateNew] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      addTodo({
        label: itemText,
        speed,
        urgency,
        fun,
        dueDate: itemDate,
      }),
    );
    setItemText('');
    setShowCreateNew(false);
  };

  const todayDate = new Date();

  const todayDateDay = String(todayDate.getDate()).padStart(2, '0');
  const todayDateMonth = String(todayDate.getMonth() + 1).padStart(2, '0');
  const todayDateYear = todayDate.getFullYear();

  const today = `${todayDateYear}-${todayDateMonth}-${todayDateDay}`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h2>
            Things to do{' '}
            <span>{`(${numberOfThingsTodo}/${numberOfThingsTotal})`}</span>
          </h2>
          <ul>
            {todos
              .filter((todo) => !todo.isCompleted)
              .sort((a, b) => a.total - b.total)
              .map(({ id, isCompleted, total, dueDate, label }) => {
                const classLogic =
                  // eslint-disable-next-line no-nested-ternary
                  dueDate < today ? '-before' : !isCompleted ? '-green' : '';
                return (
                  <li key={id} className={classLogic}>
                    <input
                      value={id}
                      onChange={() => dispatch(toggleTodo(id))}
                      type="checkbox"
                      checked={isCompleted}
                    />
                    {label}
                    <br />
                    Due Date:
                    <strong>{String(dueDate)}</strong>
                    <button
                      onClick={() => dispatch(removeTodo(id))}
                      type="button"
                    >
                      X
                    </button>
                    <br />
                    <small> speed: {speed} </small>
                    <small> urgency: {urgency} </small>
                    <small> funny: {fun} --- </small>
                    <strong> total: {total} </strong>
                  </li>
                );
              })}
          </ul>
          <h2>
            Things done{' '}
            <span>{`(${numberOfThingsDone}/${numberOfThingsTotal})`}</span>
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
                value={itemText}
                onChange={(event) => setItemText(event.target.value)}
              />
              <button type="submit">Submit</button>
              <input
                type="date"
                id="start"
                name="trip-start"
                value={itemDate}
                onChange={(event) => setItemDate(event.target.value)}
                min="2020-01-01"
                max="2030-12-31"
              />
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
      </PersistGate>
    </Provider>
  );
}

export default App;
