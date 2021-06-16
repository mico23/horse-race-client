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

//   const [selectedIndex, setSelectedIndex] = React.useState(1);

// export class ManageStadiums extends Component {
//     constructor() {
//         super();
//         this.state = {
//             sdname: "",
//             address: "",
//             capacity: 0,
//             error: false
//         }
//     }

//     handleManage = (event) => {
//       // pops up edit dialog
//     }

//     handleOpenDialog = (event, edata) => {
//       // see from General
//     }

//     handleListItemClick = (event, index) => {
//         setSelectedIndex(index);
//     }
    
//     render() {
//         const {classes, stadium} = this.props;

//         return (
//             <div className={classes.root}>
//             <Grid container spacing={3} justify="center" alignItems="center">
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Stadiums
//               </Typography>
//                 <List className={classes.listRoot}>
//                   {stadium.name.map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     return (
//                       <ListItem key={value} role={undefined} button selected={selectedIndex === value} onClick={(event) => this.handleListItemClick(event, value)}>
//                         <ListItemText id={labelId} primary={`Stadium ${value}`} />
//                       </ListItem>
//                     );
//                   })}
//                 </List>
//               </Grid>
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Stadium Info
//               </Typography>
//               <Card className={classes.listRoot} variant="outlined">
//                 <CardContent>
//                   <Typography variant="h6" component="h2" gutterBottom>
//                   {stadium.name}
//                   </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Stadium address
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                     {stadium.address}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Capacity
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                     {stadium.capacity}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>View Records</Button>
//                 </CardActions>
//               </Card>
//               </Grid>
//               <Grid item xs={12}>
//               </Grid>
//               <Button variant="outlined" color="primary" onClick={this.handleOpenDialog}>
//                 Add Stadium
//               </Button>
//             </Grid>
//           </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     customer: state.stadium,
// })

// export default connect(mapStateToProps, null)(withStyles(styles)(ManageStadiums));