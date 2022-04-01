/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

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

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Route exact path="/" component={LandingView} />
            <Route path="/intro-1" component={IntroView1} />
            <Route path="/main" component={MainView} />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
