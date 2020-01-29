import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../src/components/Welcome';

describe('Render Welcome component', () => {
    it('should render Welcome component successfully', () => {
        const wrapper = shallow(<Welcome/>);
        expect(wrapper.find('h1').length).toBe(2);
        expect(wrapper.find('Link').length).toBe(1);
       
    })
})
