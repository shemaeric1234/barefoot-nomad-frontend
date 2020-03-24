import React from "react";
import { mount, shallow } from "enzyme";
import MainLayout from "../src/layouts/main.layout.jsx";
import { handleDrawerToggle } from "../src/layouts/main.layout.jsx";

describe('Render main layout', () => {
	it('should render main layout successfully', () => {
		const wrapper = shallow(<MainLayout />);
		const IconButton = wrapper.find('#IconButton');
		IconButton.props().onClick();
		const Drawer = wrapper.find('#Drawer');
		Drawer.props().onClose();
		const Route = wrapper.find('Route');
		expect(wrapper.find('div').length).toBe(4);
		expect(wrapper.find('main').length).toBe(1);
		expect(wrapper.find('Switch').length).toBe(1);
		expect(wrapper.find('Route').length).toBe(11);
	});
});
