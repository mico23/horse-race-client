import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { openAddE, closeAddE, addEmployee } from './redux/actions/employeeAction';
import { 
    Button, Grid,
    DialogTitle, Dialog, DialogActions, DialogContent, 
    TextField 
} from '@material-ui/core'

// Dialog
export class AddEmployee extends Component {
    constructor() {
        super();
        this.state = {
            open:false,
            error: false
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
        if(this.state.salary<0){
          this.setState({error:true})
        } else {
          this.setState({error:false})
        }
    }

    handleAdd = (event) => {
        if (this.state.eid == null) {
            alert('ID cannot be blank. Please entre again.')
        } else if (this.state.salary < 0) {
            alert('Invalid salary. Please entre again.')
        }else {
            console.log('Proceeding addition')
            const edata = {
                username: this.props.employee.username.trim(),
                ename: this.state.ename,
                eid: this.state.eid,
                level: this.state.level,
                position: this.state.position,
                salary: this.state.salary,
                startdate: this.state.startdate
            };
            this.props.addEmployee(edata);
            //this.props.closeAddE();
        }
    };

    handleCancel = (event) => {
        this.setState({open:false})
    }

    handleOpen = (event) => {
        this.setState({open:true})
    }
    
    render() {
        //const {employee:{addWindow}} = this.props;
        const {ename, eid, level, position, salary, startdate, error} = this.state;
        return (
            <div>
              <Grid container justify="center" alignItems="center">
              <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                Add Employee
              </Button>
              </Grid>
                <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="ename"
                        label="Name"
                        type="char"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="eid"
                        label="Employee ID"
                        type="char"
                        defaultValue="default_max_id_+1?"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="position"
                        label="Position"
                        type="char"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    {/**dropdown list will require <Select> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="level"
                        label="Level"
                        type="char"
                        defaultValue="dropdown?"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="salary"
                        label="Salary"
                        type="real"
                        onChange={this.handleChange}
                        error={error}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="startdate"
                        label="Starting date"
                        type="date"
                        defaultValue="2021-06-18"
                        onChange={this.handleChange}
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCancel} color="tertiary">
                        Cancel
                      </Button>
                      <Button onClick={this.handleAdd} color="primary">
                        Add
                      </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employee: state.employee
})

const mapActionsToProps = {
    // openAddE,
    // closeAddE,
    // addEmployee
}

//export default connect(mapStateToProps, mapActionsToProps)(AddEmployee);
export default AddEmployee;