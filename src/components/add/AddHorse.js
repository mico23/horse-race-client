// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// //import { addHorse } from '../../redux/actions/horseAction';
// import { 
//     Button, 
//     DialogTitle, Dialog, DialogActions, DialogContent, 
//     TextField 
// } from '@material-ui/core'

// // Dialog
// export class AddHorse extends Component {
//     constructor() {
//         super();
//         this.state = {
//             hname: "",
//             hid: "",
//             breed: "",
//             age: "",
//             odds: null,
//             numraces: 0,
//             open:false,
//             error: false
//         }
//     }

//     handleChange = (event) => {
//         event.preventDefault();
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//         if(this.state.odds<0){
//           this.setState({error:true})
//         } else {
//           this.setState({error:false})
//         }
//     }

//     handleAdd = (event) => {
//         if (this.state.hid == null) {
//             alert('ID cannot be blank. Please entre again.')
//         } else if (this.state.odds < 0) {
//             alert('Invalid odds. Please entre again.')
//         }else {
//             console.log('Proceeding addition')
//             const hdata = {
//                 hname: this.state.hname,
//                 hid: this.state.hid,
//                 breed: this.state.breed,
//                 age: this.state.age
//             };
//             this.props.addHorse(hdata);
//             this.props.closeAddH();
//         }
//     };

//     handleCancel = (event) => {
//         this.setState({open:false})
//     }
    
//     render() {
//         const {horse:{fundWindow}} = this.props;
//         const {hname, hid, breed, age} = this.state;
//         return (
//             <div>
//                 <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
//                     <DialogTitle id="form-dialog-title">Add Horse</DialogTitle>
//                     <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="hname"
//                         label="Nickname"
//                         type="char"
//                         value={hname}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="hid"
//                         label="Horse ID"
//                         type="char"
//                         defaultValue="default_max_id_+1?"
//                         value={hid}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="breed"
//                         label="Breed"
//                         type="char"
//                         value={breed}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="age"
//                         label="Age"
//                         type="char"
//                         value={age}
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
//     horse: state.horse
// })

// const mapActionsToProps = {
//     //addHorse
// }

// export default connect(mapStateToProps, mapActionsToProps)(AddHorse);