import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog
} from '@material-ui/core';
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <Dialog 
        open 
        onRequestClose={this.props.toggleLogin}
        fullScreen={this.props.fullScreen}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
          <Link to='/'>Back</Link>
          </Button>
          <Button color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Login;