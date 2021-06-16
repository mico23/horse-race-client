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

// export class ManageJockeys extends Component {
//     constructor() {
//         super();
//         this.state = {
//             jname: "",
//             jid: "",
//             yoe: 0,
//             club: "",
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
//         const {classes, jockey} = this.props;

//         return (
//             <div className={classes.root}>
//             <Grid container spacing={3} justify="center" alignItems="center">
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Jockeys
//               </Typography>
//                 <List className={classes.listRoot}>
//                   {jockey.jid.map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     return (
//                       <ListItem key={value} role={undefined} button selected={selectedIndex === value} onClick={(event) => this.handleListItemClick(event, value)}>
//                         <ListItemText id={labelId} primary={jockey.jid} />
//                       </ListItem>
//                     );
//                   })}
//                 </List>
//               </Grid>
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Jockey Info
//               </Typography>
//               <Card className={classes.listRoot} variant="outlined">
//                 <CardContent>
//                     <Typography variant="h6" component="h2" gutterBottom>
//                       {jockey.nickname}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Jockey ID
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                       {jockey.jid}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Years of experience
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                       {jockey.yoe}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Horse club
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                       {jockey.club}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>Edit</Button>
//                   <Button size="small" color="primary" onClick={(event) => this.handleDelete(event)}>Delete</Button>
//                 </CardActions>
//               </Card>
//               </Grid>
//               <Grid item xs={12}>
//               </Grid>
//               <Button variant="outlined" color="primary" onClick={this.handleOpenDialog}>
//                 Add Jockey
//               </Button>
//             </Grid>
//           </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     customer: state.jockey,
// })

// export default connect(mapStateToProps, null)(withStyles(styles)(ManageJockeys));