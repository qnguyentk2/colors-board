/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import toJSON from 'enzyme-to-json';
import ColorsBoard, { 
  getRandomColor,
  swapArrayElements
} from './ColorsBoard';


const setup = () => {
  const wrapper = shallow(
    <ColorsBoard />
  );

  return { wrapper };
}

describe('Test getRandomColor', () => {
  test('it should return right color', () => {
    const result = 'hsl(aaa, 100%, 10%)'
    const colors = getRandomColor('aaa', 10);
    expect(colors).toEqual(result);
  })
})

describe('Test swapArrayElements', () => {
  test('it should return right arr', () => {
    const array = ['a','b'];
    const resultArray = ['b','a'];
    const result = swapArrayElements(array, 0, 1);
    expect(result).toEqual(resultArray);
  })
})

describe('Test AppContent', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('it should call handleDragOver', () => {
    const { wrapper } = setup();
    const e = {
      preventDefault: jest.fn().mockImplementation()
    }
    wrapper.instance().handleDragOver(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  test('it should call handleDragStart', () => {
    const { wrapper } = setup();
    const e = {
      preventDefault: jest.fn
    }
    const mockSetState = jest.spyOn(wrapper, "setState")
    const dragStartFn = wrapper.instance().handleDragStart;
    dragStartFn(e, 0, 1);
    expect(mockSetState).toHaveBeenCalled();
  });

  test('it should call setState 1 time', () => {
    const { wrapper } = setup();
    const e = {
      preventDefault: jest.fn
    }
    const mockSetState = jest.spyOn(wrapper, "setState")
    wrapper.instance().handleDragStart(e, 0, 1);
    wrapper.instance().handleDrop(e, 0, 2);
    expect(mockSetState).toHaveBeenCalledTimes(3);
  });

  test('it should call swapArrayElements', () => {
    const { wrapper } = setup();
    const e = {
      preventDefault: jest.fn
    }
    const mockSetState = jest.spyOn(wrapper, "setState")
    wrapper.instance().handleDragStart(e, 0, 1);
    wrapper.instance().handleDrop(e, 0, 1);
    expect(mockSetState).toHaveBeenCalledTimes(3);
  });
})