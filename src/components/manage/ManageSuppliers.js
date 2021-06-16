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

// export class ManageSuppliers extends Component {
//     constructor() {
//         super();
//         this.state = {
//             cname: "",
//             sid: "",
//             phone: "",
//             stype: "",
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
//         // display
//     }
    
//     render() {
//         const {classes, supplier} = this.props;

//         return (
//             <div className={classes.root}>
//             <Grid container spacing={3} justify="center" alignItems="center">
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Suppliers
//               </Typography>
//                 <List className={classes.listRoot}>
//                   {supplier.sid.map((value) => {
//                     const labelId = `checkbox-list-label-${value}`;
//                     return (
//                       <ListItem key={value} role={undefined} button selected={selectedIndex === value} onClick={(event) => this.handleListItemClick(event, value)}>
//                         <ListItemText id={labelId} primary={supplier.cname} />
//                       </ListItem>
//                     );
//                   })}
//                 </List>
//               </Grid>
//               <Grid item xs={4}>
//               <Typography variant="h5" gutterBottom>
//                 Supplier Info
//               </Typography>
//               <Card className={classes.listRoot} variant="outlined">
//                 <CardContent>
//                     <Typography variant="h6" component="h2" gutterBottom>
//                         {supplier.cname}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Supplier ID
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                     {supplier.sid}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Phone number
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                     {supplier.phone}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary" component="p">
//                         Type
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                     {supplier.type}
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>View Details</Button>
//                 </CardActions>
//               </Card>
//               </Grid>
//               <Grid item xs={12}>
//               </Grid>
//               <Button variant="outlined" color="primary" onClick={this.handleOpenDialog}>
//                 Add Supplier
//               </Button>
//             </Grid>
//           </div>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     customer: state.supplier,
// })

// export default connect(mapStateToProps, null)(withStyles(styles)(ManageSuppliers));