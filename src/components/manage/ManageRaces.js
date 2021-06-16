// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { 
//     Button, 
//     Grid,
//     Typography, 
//     List, ListItem, ListItemText, 
//     Card, CardContent, CardActions
// } from '@material-ui/core'
// import { makeStyles, withStyles } from '@material-ui/core/styles';

// const styles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     listRoot: {
//         width: '100%',
//         maxWidth: 360,
//         minWidth: 260,
//         backgroundColor: theme.palette.background.paper,
//         position: 'relative',
//         overflow: 'auto',
//         maxHeight: 330,
//     },
//   }));

// const [selectedIndex, setSelectedIndex] = React.useState(1);

// export class ManageRaces extends Component {
//     constructor() {
//         super();
//         this.state = {
//             rid: "",
//             rtype: "",
//             rdate: "",
//             location: "",   // sd address :( ?
//             hj: "",     // horse-jockey pairs?
//             error: false
//         }
//     }

//     handleManage = (event) => {
//       // pops up edit dialog
//     }

//     handleDelete = (event) => {
//       // pops up warning dialog
//     }

//     handleOpenDialog = (event, edata) => {
//       // see from General
//     }

//     handleListItemClick = (event, index) => {
//         setSelectedIndex(index);
//     }
    
//     render() {
//         const {classes, race} = this.props;

//         return (
//             <div className={classes.root}>
//             <Grid container spacing={3} justify="center" alignItems="center">
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Races
//               </Typography>
//                 <List className={classes.listRoot}>
//                   {race.rid.map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     return (
//                       <ListItem key={value} role={undefined} button selected={selectedIndex === value} onClick={(event) => this.handleListItemClick(event, value)}>
//                         <ListItemText id={labelId} primary={race.rid} />
//                       </ListItem>
//                     );
//                   })}
//                 </List>
//               </Grid>
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Race Info
//               </Typography>
//               <Card className={classes.listRoot} variant="outlined">
//                 <CardContent>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Race ID
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         {race.rid}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Type
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         {race.type}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Date
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         {race.date}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Location
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         {race.location}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>View Details</Button>
//                   <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>Delete</Button>
//                 </CardActions>
//               </Card>
//               </Grid>
//               <Grid item xs={12}>
//               </Grid>
//               <Button variant="outlined" color="primary" onClick={this.handleOpenDialog}>
//                 Add Race
//               </Button>
//             </Grid>
//           </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     customer: state.race,
// })

// export default connect(mapStateToProps, null)(withStyles(styles)(ManageRaces));