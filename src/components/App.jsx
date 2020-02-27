import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
// import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import allReducers from '@reducers';
import PageLayout from '@components/PageLayout/PageLayout';
import { GlobalProvider, GlobalConsumer } from '@contexts/GlobalContext';

const CACHE = {
  STATE: {}
};
const state = JSON.parse(JSON.stringify(CACHE.STATE));
const history = createBrowserHistory();
const store = createStore(allReducers, state, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <GlobalProvider>
      <GlobalConsumer>
        {props => (
          <Router history={history}>
            {/* <ErrorBoundary> */}
            <Switch>
              <PageLayout {...props} />
            </Switch>
            {/* </ErrorBoundary> */}
          </Router>
          )}
      </GlobalConsumer>
    </GlobalProvider>
  </Provider>
);

export default App;
