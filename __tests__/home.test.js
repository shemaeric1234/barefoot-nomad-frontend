import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {HomeRedux }from '../src/views/HomeRedux';
import {  mapStateToProps } from '../src/views/HomeRedux';
import {props} from '../__mockData__/redux-mock-data'
describe('Render welcome app component', () => {
    it('should render the  redux component successfully', () => {
        const wrapper = mount(<HomeRedux  {...props}/>);
        expect(wrapper.find('h1').text()).toEqual('Hello world To barefoot');   
        expect(wrapper.find('h1').length).toBe(1);
        expect(wrapper.find('button').length).toBe(2);   
        expect(mapStateToProps)
        const mockedState = 'welcome';
          const state = mapStateToProps(mockedState);
          expect(state).toBeTruthy();
    })
})