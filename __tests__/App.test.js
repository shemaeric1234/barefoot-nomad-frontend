import React from 'react';
import { mount } from 'enzyme';
import App from '../src/components/index';

describe('Render root app component', () => {
    it('should render the root app component successfully', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.text()).toEqual('You are welcome at Barefoot nomad');   
    })
})
