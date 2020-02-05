import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialAuth from '../../src/components/auth/SocialLogin';
import { props } from '../../__mockData__/signin-mock-data'

describe('Social Login component tests', () => {
    it('should render SocialLogin component successfully', () => {
        const wrapper = mount(<SocialAuth {...props}/>);
        expect(wrapper.find('div').length).toBe(4);
       
    })
})

