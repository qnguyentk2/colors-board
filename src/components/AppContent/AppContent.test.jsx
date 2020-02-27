/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import AppContent from './AppContent';


const setup = props => {
  const initialState = {
    getState: jest.fn(),
    error: {},
    loading: false,
    trips: []
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <AppContent {...props} />
      </MemoryRouter>
    </Provider>
  );

  return { wrapper };
}

describe('Test AppContent', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})