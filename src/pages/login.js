import React, { Component } from 'react';

// Components
import NavBar from '../components/NavBar';

// Redux
import { connect } from 'react-redux';
import { loginUser, setEmployee } from '../redux/actions/user';

// Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {

}

export class login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: false
        }
    }

    handleLogin = (event) => {
        const loginData = {
            username: this.state.username.trim(),
            password: this.state.password
        };

        this.props.loginUser(loginData, this.props.history);
    }

    handleSetEmployee = (event, newStatus) => {
        this.props.setEmployee(newStatus);
    }

    render() {
        const {classes, user: {loading, isEmployee, loginError}} = this.props;
        const {username, password, error} = this.state;

        return (
            <div>
                <Grid container justify="center" style={{marginTop: '150px'}}>
                    <NavBar/>
                    <Grid item sm />
                    <Grid item sm>
                        <Paper elevation={3}>
                            <Grid container justify="center" alignItems="center" style={{height: '400px'}}>
                                <Grid item>
                                    <ToggleButtonGroup value={isEmployee} exclusive onChange={this.handleSetEmployee}>
                                        <ToggleButton value={false}>
                                            Customer
                                        </ToggleButton>
                                        <ToggleButton value={true}>
                                            Employee
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                                <Grid item>
                                    <Typography>
                                        Log In
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapActionsToProps = {
    loginUser,
    setEmployee
}

export default connect(mapStateToProps, mapActionsToProps)(login);
