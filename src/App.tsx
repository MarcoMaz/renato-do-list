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

  const [itemText, setItemText] = useState('');
  const [speed, setSpeed] = useState(0);
  const [urgency, setUrgency] = useState(0);
  const [fun, setFun] = useState(0);

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <ThingsTodo
            numberOfThingsTodo={numberOfThingsTodo}
            numberOfThingsTotal={numberOfThingsTotal}
            tasks={tasks}
            urgency={urgency}
            fun={fun}
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
              itemText={itemText}
              speed={speed}
              urgency={urgency}
              fun={fun}
              setItemText={setItemText}
              setShowCreateNew={setShowAddTask}
              setSpeed={setSpeed}
              setUrgency={setUrgency}
              setFun={setFun}
            />
          )}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
