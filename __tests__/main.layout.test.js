import React from 'react';
import { mount } from 'enzyme';
import MainLayout from '../src/layouts/main.layout.jsx';

describe('Render main layout', () => {
    it('should render main layout successfully', () => {
        const wrapper = mount(<MainLayout/>);
    })
})
