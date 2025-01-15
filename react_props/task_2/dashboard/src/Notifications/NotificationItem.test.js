import React from 'react';
import NotificationItem from "./NotificationItem.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


it(" rendering of the component", () => {
    const wrapper = shallow(<NotificationItem/>)
    expect(wrapper.exists()).toEqual(true);
})

it("renders the correct Props ", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test"/>)
    expect(wrapper.props()).toEqual({"children": "test", "data-priority": "default"})
})

it("renders the correct html", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />)
    expect(wrapper.html()).toEqual("<li><u>test</u></li>")
})