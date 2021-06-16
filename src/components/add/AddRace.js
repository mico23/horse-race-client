// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// //import { addRace } from '../../redux/actions/raceAction';
// import { 
//     Button, 
//     DialogTitle, Dialog, DialogActions, DialogContent, 
//     TextField 
// } from '@material-ui/core'

// // Dialog
// export class AddRace extends Component {
//     constructor() {
//         super();
//         this.state = {
//             rid: "",
//             rtype: "",
//             rdate: "",
//             location: "",
//             hj: "",     // horse-jockey pairs?
//             open:false,
//             error: false
//         }
//     }

//     handleChange = (event) => {
//         event.preventDefault();
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//     }

//     handleAdd = (event) => {
//         if (this.state.rid == null) {
//             alert('ID cannot be blank. Please entre again.')
//         }else {
//             console.log('Proceeding addition')
//             const rdata = {
//                 rid: this.state.rid,
//                 rtype: this.state.rtype,
//                 rdate: this.state.rdate,
//                 location: this.state.location,
//                 hj: this.state.hj
//             };
//             this.props.addRace(rdata);
//             this.props.closeAddR();
//         }
//     };

//     handleCancel = (event) => {
//         this.setState({open:false})
//     }
    
//     render() {
//         const {race:{fundWindow}} = this.props;
//         const {rid, rtype, location, rdate, hj} = this.state;
//         return (
//             <div>
//                 <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
//                     <DialogTitle id="form-dialog-title">Add Horse</DialogTitle>
//                     <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="rid"
//                         label="Race ID"
//                         type="char"
//                         value={rid}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="rtype"
//                         label="Type"
//                         type="char"
//                         value={rtype}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="rdate"
//                         label="Date"
//                         type="date"
//                         value={rdate}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="location"
//                         label="Location"
//                         type="char"
//                         defaultValue="dropdown?"
//                         value={location}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     </DialogContent>
//                     <DialogActions>
//                       <Button onClick={this.handleCancel} color="tertiary">
//                         Cancel
//                       </Button>
//                       <Button onClick={this.handleAdd} color="primary">
//                         Add
//                       </Button>
//                     </DialogActions>
//                 </Dialog>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     race: state.race
// })

// const mapActionsToProps = {
//     //addRace
// }

// export default connect(mapStateToProps, mapActionsToProps)(AddRace);