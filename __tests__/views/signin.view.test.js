import React from 'react';
import { mount } from 'enzyme';
import Signin from '../../src/views/signin.view.jsx';

describe('Render signin view', () => {
    it('should render signin view successfully', () => {
        const wrapper = mount(<Signin/>);
        expect(wrapper.find('div').text()).toEqual('Signin');
    })
})
