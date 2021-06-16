import React, { Component } from 'react';
import { Button, IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

/**
 * Jenny's NavBar
 * TODO: makeStyles to be fixed; hooks wont work with class-based components
 */

const styles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }));

export class NavBarLP extends Component {
    
    handleProfileOpen = (event) => {
        //
      }

    render() {
        const {classes} = this.props;
        return (
        <div>
        <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            HORSE RACE BETTING
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              Log Out
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={this.handleProfileOpen}
              color="inherit"
            >
              Profile
            </IconButton>
          </div>
        </Toolbar>
        </AppBar>
        </div>
        )
    }
}

export default withStyles(styles)(NavBarLP);