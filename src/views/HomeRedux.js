import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goodBye, greeting } from '../actions/homeActions';
 
export class HomeRedux extends Component {
    render() {
        const { message, goodBye, greeting } = this.props;
        return (
        <div>
            <h1>{message.homeReducer.greet} To barefoot</h1>
			<button className='greeting' onClick={greeting}>Greeting</button>
			<button className='goodbye' onClick={goodBye}>GoodBye</button>
		</div>
        );
    }

}
export const mapStateToProps = state => {
	return {
		message: state,
	};
};

export default connect(mapStateToProps, {greeting, goodBye})(HomeRedux);
