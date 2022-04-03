/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';

// Styling
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

// Redux
import { Provider } from 'react-redux';
import store from './state/store';

// Views
import LandingView from './views/LandingView';
import IntroView1 from './views/IntroView1';
import MainView from './views/MainView';
import AddEditView from './views/AddEditView';

const persistor = persistStore(store);

const App = () => {
  const [itemText, setItemText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [urgency, setUrgency] = useState(1);
  const [fun, setFun] = useState(1);
  const [editIndex, setEditIndex] = useState(0);
  const [modifyTask, setModifyTask] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Route exact path="/renato-do-list" component={LandingView} />
            <Route path="/intro-1" component={IntroView1} />
            <Route
              path="/main"
              render={() => (
                <MainView
                  setItemText={setItemText}
                  setSpeed={setSpeed}
                  setUrgency={setUrgency}
                  setFun={setFun}
                  setEditIndex={setEditIndex}
                  setModifyTask={setModifyTask}
                  setShowModal={setShowModal}
                  showModal={showModal}
                  showToast={showToast}
                  setShowToast={setShowToast}
                />
              )}
            />
            <Route
              path="/add-edit"
              render={() => (
                <AddEditView
                  itemText={itemText}
                  speed={speed}
                  urgency={urgency}
                  fun={fun}
                  editIndex={editIndex}
                  modifyTask={modifyTask}
                  setItemText={setItemText}
                  setSpeed={setSpeed}
                  setUrgency={setUrgency}
                  setFun={setFun}
                  setModifyTask={setModifyTask}
                />
              )}
            />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
