import React from 'react';
import { shallow } from 'enzyme';
import Login from '../src/components/auth/Login';

describe('Render login component', () => {
    it('should render the Login component successfully', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('Link').length).toBe(1);
    
    })
})
