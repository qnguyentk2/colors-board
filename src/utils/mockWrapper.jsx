import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { initialState as tripsInitialState } from '@reducers/trips';

const mockStore = configureStore([thunk]);

// console.log('AllReducers: ', AllReducers);

export default function getWrapper(
  component,
  initState = {},
  useMemory = false,
  useShallow = false,
) {
  const store = mockStore({
    ...tripsInitialState,
    ...initState
  });
  if (useShallow) {
    return shallow(<Provider store={store}>{component}</Provider>);
  }
  if (!useMemory) {
    return mount(<Provider store={store}>{component}</Provider>);
  }
  return mount(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>,
  );
}
