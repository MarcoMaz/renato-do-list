/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Styling
import './App.scss';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Redux
import { Provider } from 'react-redux';
import { useState } from 'react';
import { useAppSelector } from './state/hooks';
import store from './state/store';

// Components
import Button from './components/core/Button';
import ThingsTodo from './components/ThingsTodo';
import ThingsDone from './components/ThingsDone';
import AddTask from './components/AddTask';

const persistor = persistStore(store);

function App() {
  const tasks = useAppSelector((state) => state.task);
  const completedTodos = useAppSelector((state) =>
    state.task.map((task) => task.isCompleted),
  );

  const numberOfThingsTotal = tasks.length;
  const numberOfThingsDone = completedTodos.filter(Boolean).length;
  const numberOfThingsTodo = numberOfThingsTotal - numberOfThingsDone;

  const [newItemText, setItemText] = useState('');
  const [newSpeed, setSpeed] = useState(0);
  const [newUrgency, setUrgency] = useState(0);
  const [newFun, setFun] = useState(0);

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <ThingsTodo
            numberOfThingsTodo={numberOfThingsTodo}
            numberOfThingsTotal={numberOfThingsTotal}
            tasks={tasks}
          />
          <ThingsDone
            numberOfThingsDone={numberOfThingsDone}
            numberOfThingsTotal={numberOfThingsTotal}
            tasks={tasks}
          />
          {!showAddTask && (
            <Button
              type="button"
              label="+"
              onClick={() => setShowAddTask(true)}
            />
          )}
          {showAddTask && (
            <AddTask
              itemText={newItemText}
              speed={newSpeed}
              urgency={newUrgency}
              fun={newFun}
              setItemText={setItemText}
              setShowCreateNew={setShowAddTask}
              setSpeed={setSpeed}
              setUrgency={setUrgency}
              setFun={setFun}
            />
          )}
          <h3>you selected</h3>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
