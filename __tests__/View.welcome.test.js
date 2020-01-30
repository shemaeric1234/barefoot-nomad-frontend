import React from 'react';
import { shallow } from 'enzyme';
import WelcomePage from '../src/views/WelcomePage';

describe('Render Welcome view', () => {
    it('should render Welcome view successfully', () => {
        const wrapper = shallow(<WelcomePage/>);
        expect(wrapper.find('Welcome').length).toBe(1);
    })
})
