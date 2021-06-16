import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editEmployee } from '../redux/actions/employeeAction';
import { 
    Button, 
    DialogTitle, Dialog, DialogActions, DialogContent, 
    TextField 
} from '@material-ui/core'

// Dialog
export class EditEmployee extends Component {
    constructor() {
        super();
        this.state = {
            ename: "",
            eid: "",
            level: "",
            position: "",
            salary: 0,
            startdate: "",
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
        if (this.state.salary < 0) {
            alert('Invalid salary. Please entre again.')
        }else {
            console.log('Proceeding addition')
            const edata = {
                username: this.props.employee.username.trim(),
                level: this.state.level,
                position: this.state.position,
                salary: this.state.salary,
            };
            this.props.editEmployee(edata);
        }
    };

    handleCancel = (event) => {
        this.setState({open:false})
    }
    
    render() {
        const {employee:{fundWindow}} = this.props;
        const {level, position, salary, error} = this.state;
        return (
            <div>
                <Dialog open={this.state.open} onClose={this.handleCancel} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
                    <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="position"
                        label="Position"
                        type="char"
                        value={position}
                        onChange={this.handleChangePos}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="level"
                        label="Level"
                        type="char"
                        value={level}
                        onChange={this.handleChangeLevel}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="salary"
                        label="Salary"
                        type="real"
                        value={salary}
                        onChange={this.handleChangeSalary}
                        error={error}
                        fullWidth
                    />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCancel} color="tertiary">
                        Cancel
                      </Button>
                      <Button onClick={this.handleOk} color="primary">
                        OK
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
    editEmployee
}

export default connect(mapStateToProps, mapActionsToProps)(EditEmployee);