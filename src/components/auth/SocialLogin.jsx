import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { withStyles } from '@material-ui/core/styles';
import googleIcon from '../../assets/google-icon-1.png';
import facebookIcon from '../../assets/facebook-app-logo-1.png';

const useStyles = theme => ({
   socialauth: {
      margin: theme.spacing(3, 0, 2),
      background: 'white',
      color: '#0094ff',
      fontSize: 8.5,
   },
   anchor_tags_class: {
      textDecoration: 'none',
      margin: '2px',
      color: '#0094FF',
      fontWeight: 'bold',
      fontSize: '7px',

   }
});
export class SocialAuth extends Component {
   render() {
      const { classes } = this.props;
      return (
         <div>
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <Button className={classes.socialauth} variant="outlined" color="primary">
                     <img src={googleIcon} />
                     <a href='https://blackninjas-backend-staging.herokuapp.com/api/v1/auth/google'
                        className={classes.anchor_tags_class}>Sign in with Google
               </a>
                  </Button>
               </Grid>
               <Grid item xs={6}>
                  <Button className={classes.socialauth} variant="outlined" color="primary">
                     <img src={facebookIcon} />
                     <a href='https://blackninjas-backend-staging.herokuapp.com/api/v1/auth/facebook'
                        className={classes.anchor_tags_class}>Sign in with Facebook
               </a>

                  </Button>
               </Grid>
            </Grid>
         </div>
      )
   }
}
export default withStyles(useStyles)(SocialAuth)