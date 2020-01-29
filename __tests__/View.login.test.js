import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../src/views/LoginPage';

describe('Render login view', () => {
    it('should render login view successfully', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(wrapper.find('Login').length).toBe(1);
    })
})
