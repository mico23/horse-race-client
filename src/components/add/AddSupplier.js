// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// //import { addSupplier } from '../../redux/actions/supplierAction';
// import { 
//     Button, 
//     DialogTitle, Dialog, DialogActions, DialogContent, 
//     TextField 
// } from '@material-ui/core'

// // Dialog
// export class AddSupplier extends Component {
//     constructor() {
//         super();
//         this.state = {
//             cname: "",
//             sid: "",
//             phone: "",
//             stype: "",
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
//         if (this.state.sid == null) {
//             alert('ID cannot be blank. Please entre again.')
//         } else {
//             console.log('Proceeding addition')
//             const sdata = {
//                 cname: this.state.cname,
//                 sid: this.state.sid,
//                 phone: this.state.phone,
//                 stype: this.state.stype
//             };
//             this.props.addSupplier(sdata);
//             this.props.closeAddS();
//         }
//     };

//     handleCancel = (event) => {
//         this.setState({open:false})
//     }
    
//     render() {
//         const {supplier:{fundWindow}} = this.props;
//         const {cname, sid, phone, stype} = this.state;
//         return (
//             <div>
//                 <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
//                     <DialogTitle id="form-dialog-title">Add Horse</DialogTitle>
//                     <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="cname"
//                         label="Company name"
//                         type="char"
//                         value={cname}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="sid"
//                         label="Supplier ID"
//                         type="char"
//                         defaultValue="default_max_id_+1?"
//                         value={sid}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="phone"
//                         label="Phone number"
//                         type="char"
//                         value={phone}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="stype"
//                         label="Type"
//                         type="char"
//                         defaultValue="dropdown?"
//                         value={stype}
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
//     supplier: state.supplier
// })

// const mapActionsToProps = {
//     //addSupplier
// }

// export default connect(mapStateToProps, mapActionsToProps)(AddSupplier);