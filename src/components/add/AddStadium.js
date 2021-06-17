// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// //import { addStadium } from '../../redux/actions/stadiumAction';
// import { 
//     Button, 
//     DialogTitle, Dialog, DialogActions, DialogContent, 
//     TextField 
// } from '@material-ui/core'

// // Dialog
// export class AddStadium extends Component {
//     constructor() {
//         super();
//         this.state = {
//             sdname: "",
//             address: "",
//             capacity: 0,
//             open:false,
//             error: false
//         }
//     }

//     handleChange = (event) => {
//         event.preventDefault();
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//         if(this.state.capacity<0){
//           this.setState({error:true})
//         } else {
//           this.setState({error:false})
//         }
//     }

//     handleAdd = (event) => {
//         if (this.state.capacity < 0) {
//             alert('Invalid capacity. Please entre again.')
//         }else {
//             console.log('Proceeding addition')
//             const sddata = {
//                 sdname: this.state.sdname,
//                 address: this.state.address,
//                 capacity: this.state.capacity
//             };
//             this.props.addStadium(sddata);
//             this.props.closeAddSd();
//         }
//     };

//     handleCancel = (event) => {
//         this.setState({open:false})
//     }
    
//     render() {
//         const {stadium:{fundWindow}} = this.props;
//         const {sdname, address, capacity, error} = this.state;
//         return (
//             <div>
//                 <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
//                     <DialogTitle id="form-dialog-title">Add Horse</DialogTitle>
//                     <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="sdname"
//                         label="Stadium name"
//                         type="char"
//                         value={sdname}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="address"
//                         label="Address"
//                         type="char"
//                         value={address}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="capacity"
//                         label="Capacity"
//                         type="number"
//                         value={capacity}
//                         onChange={this.handleChange}
//                         error={error}
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
//     stadium: state.stadium
// })

// const mapActionsToProps = {
//     //addStadium
// }

// export default connect(mapStateToProps, mapActionsToProps)(AddStadium);