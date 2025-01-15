import React from 'react';
import CourseList from "./CourseList.js"
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import listCourses from '../App/App.js'
configure({adapter: new Adapter()});

it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList/>)
    expect(wrapper.exists()).toEqual(true)
})

it("5", () => {
    const wrapper = shallow(<CourseList/>)
    expect(wrapper.find('CourseListRow')).toHaveLength(3)
})