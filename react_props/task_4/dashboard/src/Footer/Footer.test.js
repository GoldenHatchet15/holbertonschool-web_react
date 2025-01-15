import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from "./Footer";
configure({adapter: new Adapter()});




  it('App render class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });

  it("very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.App-footer p").html()).toContain("Copyright")
  });