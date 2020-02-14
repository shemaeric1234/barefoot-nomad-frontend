import React from 'react';
import { mount } from 'enzyme';
import { Signup } from '../../src/views/signup/signup.view.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('Render signup view', () => {

    it('should render signup view successfully', async () => {
        const signupProps = {
            signupAction: jest.fn(),
            setErrorAction: jest.fn(),
            error: '',
            isLoading: false
        };
        mount(<MemoryRouter><Signup {...signupProps} /></MemoryRouter>);
    })
})
