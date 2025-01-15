import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from "./Login";
configure({adapter: new Adapter()});


it('App render class App-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });
it("renders 2 input ", () => {
  const wrapper = shallow(<Login />)
  expect(wrapper.find('div.App-body input')).toHaveLength(2)
})

it("renders 2 label ", () => {
  const wrapper = shallow(<Login />)
  expect(wrapper.find('div.App-body label')).toHaveLength(2)
})