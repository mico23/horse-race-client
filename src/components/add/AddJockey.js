// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// //import { addJockey } from '../../redux/actions/jockeyAction';     // this.props in handle
// import { 
//     Button, 
//     DialogTitle, Dialog, DialogActions, DialogContent, 
//     TextField 
// } from '@material-ui/core'

// // Dialog
// export class AddJockey extends Component {
//     constructor() {
//         super();
//         this.state = {
//             jname: "",
//             jid: "",
//             yoe: 0,
//             club: "",
//             open:false,
//             error: false
//         }
//     }

//     handleChange = (event) => {
//         event.preventDefault();
//         this.setState({
//           [event.target.name]: event.target.value
//         });
//         if(this.state.yoe<0){
//           this.setState({error:true})
//         } else {
//           this.setState({error:false})
//         }
//     }

//     handleAdd = (event) => {
//         if (this.state.jid == null) {
//             alert('ID cannot be blank. Please entre again.')
//         } else if (this.state.yoe < 0) {
//             alert('Invalid year-of-experience. Please entre again.')
//         }else {
//             console.log('Proceeding addition')
//             const jdata = {
//                 jname: this.state.jname,
//                 jid: this.state.jid,
//                 yoe: this.state.yoe,
//                 club: this.state.club
//             };
//             this.props.addJockey(jdata);
//             this.props.closeAddJ();
//         }
//     };

//     handleCancel = (event) => {
//         this.setState({open:false})
//     }
    
//     render() {
//         const {jockey:{fundWindow}} = this.props;
//         const {jname, jid, yoe, club, error} = this.state;
//         return (
//             <div>
//                 <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
//                     <DialogTitle id="form-dialog-title">Add Jockey</DialogTitle>
//                     <DialogContent>
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="jname"
//                         label="Name"
//                         type="char"
//                         value={jname}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="jid"
//                         label="Jockey ID"
//                         type="char"
//                         defaultValue="default_max_id_+1?"
//                         value={jid}
//                         onChange={this.handleChange}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="yoe"
//                         label="Years of experience"
//                         type="number"
//                         value={yoe}
//                         onChange={this.handleChange}
//                         error={error}
//                         fullWidth
//                     />
//                     <TextField
//                         autoFocus
//                         margin="dense"
//                         id="club"
//                         label="Club"
//                         type="char"
//                         value={club}
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
//     jockey: state.jockey
// })

// const mapActionsToProps = {
//     //addJockey
// }

// export default connect(mapStateToProps, mapActionsToProps)(AddJockey);