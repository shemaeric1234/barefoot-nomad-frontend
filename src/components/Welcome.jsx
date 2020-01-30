import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
        <div>
            <h1>You are welcome at Barefoot nomad</h1>
			<Link to='/login'><h1>Click me to login</h1></Link>
		</div>
        );
    }
}

export default Welcome;
