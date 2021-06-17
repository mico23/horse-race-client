import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSingleHorse } from '../../redux/actions/horseAction';
import { fetchSingleStadium } from '../../redux/actions/stadiumAction';

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



export class ManageStadiums extends Component {

    handleListItemClick = (address) => {
        this.props.fetchSingleStadium(address);
    }
    
    renderInfo(stadium) {
      return (
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {stadium.nickname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Stadium Name
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {stadium.curHorseID}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {stadium.curBreed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             Capacity
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {stadium.curAge}
          </Typography>
        </CardContent>
      )
    }

    // ** this is not displayed properly. I will fix it later.
    displayDefaultMessage() {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select a Stadium.
          </Typography>
        </CardContent>
      )
    }

    render() {
      const {classes, stadiums, stadium, curStadiumAddr} = this.props;

        return (
            <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Stadiums
              </Typography>
              
              <List className={classes.listRoot}>
                {stadiums.map((value) => {
                  const labelId = `checkbox-list-label-${value.address}`;
                  return (
                    <ListItem 
                      key={value.address} 
                      role={undefined} 
                      button
                      onClick={() => this.handleListItemClick(value.address)}>
                      <ListItemText 
                      id={labelId} 
                      primary={
                        `${value.nickname != null ? value.nickname : 'No Name'} - 
                        ID: ${value.address}`
                      }/>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
             
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Stadium Info
              </Typography>

              <Card className={classes.listRoot} variant="outlined">
                {
                  curStadiumAddr != 0 ? this.renderInfo(stadium) : this.displayDefaultMessage()
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
  stadiums: state.stadiumInfo.stadiums,
  stadium: state.stadiumInfo,
  curStadiumAddr: state.stadiumInfo.curStadiumAddr
})

const mapActionsToProps = {
  fetchSingleStadium
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ManageStadiums));