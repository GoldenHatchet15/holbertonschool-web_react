import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "./Header";
configure({adapter: new Adapter()});


it('App render class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });

  it("render img", () => {
      const wrapper = shallow(<Header/>)
      expect(wrapper.find('div.App-header img')).toHaveLength(1);
  })