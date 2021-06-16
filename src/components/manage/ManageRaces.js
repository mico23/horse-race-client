import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurHorseID, fetchSingleHorse } from '../../redux/actions/horseAction';

import { 
    Grid,
    Typography, 
    List, ListItem, ListItemText, 
    Card, CardContent
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    listRoot: {
        width: '100%',
        maxWidth: 360,
        minWidth: 260,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 330,
    },
  });



export class ManageHorses extends Component {

    handleListItemClick = (horseID) => {
        // setSelectedIndex(index);
        console.log(horseID)
        this.props.setCurHorseID(horseID);
        this.props.fetchSingleHorse(horseID);
    }
    
    renderHorseInfo(horse) {
      return (
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {horse.nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Race ID
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {horse.curHorseID}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Type
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {horse.curBreed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {horse.curAge}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Location
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {horse.curODDs}
          </Typography>
        </CardContent>
      )
    }

    // ** this is not displayed properly. I will fix it later.
    displayDefaultMessage() {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select a race.
          </Typography>
        </CardContent>
      )
    }

    render() {
      const {classes, horses, horse, curHorseID} = this.props;
    //   const [selectedIndex, setSelectedIndex] = React.useState(1);

        return (
            <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Races
              </Typography>
              
              <List className={classes.listRoot}>
                {horses.map((value) => {
                  const labelId = `checkbox-list-label-${value.horseID}`;
                  return (
                    <ListItem 
                      key={value.horseID} 
                      role={undefined} 
                      button
                      onClick={() => this.handleListItemClick(value.horseID)}>
                      <ListItemText 
                      id={labelId} 
                      primary={
                        `${value.nickname != null ? value.nickname : 'No Name'} - 
                        ID: ${value.horseID}`
                      }/>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
             
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Race Info
              </Typography>

              <Card className={classes.listRoot} variant="outlined">
                {
                  curHorseID != 0 ? this.renderHorseInfo(horse) : this.displayDefaultMessage()
                }
              </Card>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    horses: state.horsesInfo.horses,
    horse: state.horsesInfo,
    curHorseID: state.horsesInfo.curHorseID
})

const mapActionsToProps = {
  setCurHorseID,
  fetchSingleHorse
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ManageHorses));