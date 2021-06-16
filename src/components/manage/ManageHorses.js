import React, { Component } from 'react'
import { connect } from 'react-redux';
import { 
    Button, 
    Grid,
    Typography, 
    List, ListItem, ListItemText, 
    Card, CardContent, CardActions
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
    constructor() {
        super();
        this.state = {
            hname: "",
            hid: "",
            breed: "",
            age: "",
            odds: null,
            numraces: 0,
            error: false
        }
    }

    handleManage = (event) => {
      // pops up edit dialog
    }

    handleDelete = (event) => {
      // pops up warning dialog
    }

    handleOpenDialog = (event, edata) => {
      // see from General
    }

    handleListItemClick = (horseID) => {
        // setSelectedIndex(index);
        console.log(horseID)
    }
    
    selectedIndex = ()=> {
        // dummy function to prevent error 
    }

    render() {
      const {classes, horses, horse} = this.props;
    //   const [selectedIndex, setSelectedIndex] = React.useState(1);

        return (
            <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Horses
              </Typography>
              
              <List className={classes.listRoot}>
                {horses.map((value) => {
                  const labelId = `checkbox-list-label-${value.horseID}`;
                  return (
                    // selected={this.selectedIndex === value} disabled
                    <ListItem 
                      key={value.horseID} 
                      role={undefined} 
                      button
                      onClick={(event) => this.handleListItemClick(value.horseID)}>
                      <ListItemText id={labelId} primary={value.nickname}/>
                    </ListItem>
                  );
                })}
              </List>
            </Grid>
             
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Horse Info
              </Typography>
              <Card className={classes.listRoot} variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {horse.nickname}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Horse ID
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {horse.horseID}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Breed
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {horse.breed}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Age (years)
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {horse.age}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Odds
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {horse.odds}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Number of races participated
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    {horse.numraces}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>View records</Button>
                  <Button size="small" color="primary" onClick={(event) => this.handleDelete(event)}>Delete</Button>
                </CardActions>
              </Card>
              </Grid>
              <Grid item xs={12}>
              </Grid>
              <Button variant="outlined" color="primary" onClick={this.handleOpenDialog}>
                Add Horse
              </Button>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    horses: state.horsesInfo.horses,
    horse: state.horsesInfo
})

export default connect(mapStateToProps, null)(withStyles(styles)(ManageHorses));