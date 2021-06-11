import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/user';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export class NavBar extends Component {

    handleLogout = () => {
        this.props.logoutUser()
    }

    render() {
        const {authenticated} = this.props;

        return (
            <AppBar style={{maxHeight: 40}}>
                <Toolbar>
                    <Grid justify="space-between" alignItems="center" container>
                        <Grid item>
                            <Typography>
                                Horse Racing
                            </Typography>
                        </Grid>
                        <Grid item>
                            {authenticated && (
                                <Button onClick={this.handleLogout} size="small" component={Link} to="/login">
                                    Log Out
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

const mapActionsToProps = {
    logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(NavBar);
