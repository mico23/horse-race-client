import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { fetchRaceInfo, setBetTrue, setBetFalse } from '../redux/actions/raceInfoAction';
/*
Icon Reference:
https://material-ui.com/components/material-icons/
*/
const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#fafafa',
        position: 'relative',
        overflow: 'auto',
        height: 300,
      },
      title: {
        margin: (4, 0, 2),
      },
  });

export class BetRace extends Component {
    constructor() {
        super();
        this.state = {
          amount: 0,
          invalid: false,
        }
    }

    handleClick = () => {
        console.log('clicked');
    }

    handleClickOpen = () => {
        this.props.setBetTrue();
      };
    
    handleClose = () => {
        this.props.setBetFalse();
    };

    handleChange = (event) => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        });
        if(this.state.amount<0){
            this.setState({invalid:true})
        } else {
            this.setState({invalid:false})
        }
    };

    handleTransaction = ()=> {
        console.log("clicked submit")
        /*
        {
            "horseid": 1,
            "accountid": 1,
            "amount": 100,
            "bettype": "'win bet'",
            "raceid": 1
        }
        */
    }

    renderRow(races) {
        return races.map((data)=> (
            <ListItem key={data.horseid}>
                <ListItemText primary={`${data.nickname} with odds ${data.odds}; number of races: ${data.number_of_races}`} />
                <ListItemSecondaryAction>
                    <IconButton 
                    onClick={this.handleClickOpen}
                    edge="end" 
                    aria-label="comments">
                        <AttachMoney/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>      
        ))
    }

    renderDefaultMessage() {
        return (
            <ListItem key={0}>
                <ListItemText primary={`Please select the race location.`} />
            </ListItem>
        )
    }

    render() {
        // this is required to refer styles
        const {classes, races, bet, selectedHorse} = this.props;
        const {amount, invalid} = this.state;
        
        return (
            <div>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                            Available Bets
                    </Typography>
                    <List className={classes.root} subheader={<li />}>
                    {
                        races.length ? this.renderRow(races) : this.renderDefaultMessage()
                    }
                    </List>
                </Grid>

                <Dialog open={bet} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Make Your Bet on Horse ID: {selectedHorse}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Please enter the amount.
                    </DialogContentText>
                    <TextField
                    error={invalid}
                    autoFocus
                    margin="dense"
                    id="addFund"
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={this.handleChange}
                    fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={this.handleTransaction} color="primary">
                    Submit
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // customer: state.customer,balance,
    stadiums: state.raceInfo.stadiums,
    races: state.raceInfo.races,
    bet: state.raceInfo.bet,
    selectedHorse: state.raceInfo.selectedHorse
})

const mapActionsToProps = {
    fetchRaceInfo,
    setBetTrue,
    setBetFalse
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(BetRace));
