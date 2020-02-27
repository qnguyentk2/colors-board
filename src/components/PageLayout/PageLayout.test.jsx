/* eslint-disable no-undef */
import React from 'react';
import 'babel-polyfill';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJSON from 'enzyme-to-json';
import PageLayout from './PageLayout';

const propsData = {
  isLightMode: true,
  isBurgerMenuOpen: true
}

// const propsData1 = {
//   isLightMode: false,
//   isBurgerMenuOpen: false
// }


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
        <PageLayout {...props} />
      </MemoryRouter>
    </Provider>
  );

  return { wrapper };
}

describe('Test PageLayout', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup(propsData);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
})