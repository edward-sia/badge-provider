import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Content from '../components/Content';

it('renders without crashing', () => {
  expect(shallow(<App />)).toBeDefined();
});

it('should contains Header, Navigation, and Content component', () => {
  const component = shallow(<App />);
  expect(component.find(Header)).toBeDefined();
  expect(component.find(Navigation)).toBeDefined();
  expect(component.find(Content)).toBeDefined();
});