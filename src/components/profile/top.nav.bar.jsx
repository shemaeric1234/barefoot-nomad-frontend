import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

class TopNavBar extends Component {
	render() {
		return (
			<Box width={100 / 100} display='flex' justifyContent='flex-end'>
				<Box pr={1} style={{ marginTop: '10px' }}>
					<img
						src='https://res.cloudinary.com/dby88h516/image/upload/v1580893608/email_1_jupvlq.svg'
						width='100%'
						height='24px'
					/>
				</Box>
				<Box pl={1} style={{ marginTop: '10px' }}>
					<img
						src='https://res.cloudinary.com/dby88h516/image/upload/v1580892708/bell_1_culslv.svg'
						width='100%'
						height='24px'
					/>
				</Box>
			</Box>
		);
	}
}

export default TopNavBar;
