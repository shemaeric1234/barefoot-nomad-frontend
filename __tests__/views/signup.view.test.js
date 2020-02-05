import React from 'react';
import { mount } from 'enzyme';
import Signup from '../../src/views/signup.view.jsx';

describe('Render signup view', () => {
    it('should render signup view successfully', () => {
        const wrapper = mount(<Signup/>);
        expect(wrapper.find('div').text()).toEqual('Signup');
    })
})
