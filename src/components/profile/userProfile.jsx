import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetUserProfile } from '../../actions/user.profile.action';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export class UserProfile extends Component {
	// getting a loged-in user information
	UNSAFE_componentWillMount() {
		this.props.GetUserProfile();
	}

	render() {
		const { userProfileInfo } = this.props;
		return (
			<>
				{userProfileInfo && (
					<Box width='100%' style={{ height: '100%' }}>
						{' '}
						<Link to='/profile' style={{ textDecoration: 'none' }}>
							<Box width='100%' height='110px'>
								<Typography align='center'>
									<img
										style={{
											width: '30%',
											height: '70px',
											borderRadius: '50%',
											objectFit: 'cover',
										}}
										src={userProfileInfo.profileImage}
										alt=''
									/>
								</Typography>
							</Box>
							<Box fontStyle={2} alignSelf={3}>
								<Typography
									align='center'
									style={{ fontSize: '18px', color: 'gray' }}
								>
									{userProfileInfo.firstName + ' ' + userProfileInfo.lastName}
								</Typography>
							</Box>
							<Box marginTop={1}>
								<Typography
									align='center'
									style={{ fontSize: '18px', color: 'gray' }}
								>
									{userProfileInfo.email}
								</Typography>
							</Box>
						</Link>
					</Box>
				)}
			</>
		);
	}
}
export const mapStateToProps = state => {
	return {
		userProfileInfo: state.userProfileReducer.UpdateduserProfileInfo,
	};
};
export default connect(mapStateToProps, { GetUserProfile })(UserProfile);
