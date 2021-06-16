import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCurEmpAccountID, fetchSingleEmployeeInfo } from '../../redux/actions/employeeAction';

import { 
    Button, 
    Grid,
    Typography, 
    List, ListItem, ListItemText, 
    Card, CardContent, CardActions
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    listRoot: {
      width: '100%',
      maxWidth: 360,
      minWidth: 260,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
  });


export class ManageEmployees extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            openAdd:false,
            openEdit:false
        }
    }

    // not used
    handleManage = (event) => {
      this.setState({openEdit:true})
    }
    
    // not used
    handleDelete = (event) => {
      // delete
    }

    handleOpenDialog = (event, edata) => {
      this.setState({openAdd:true})
    }

    handleListItemClick = (accountid) => {
      //display info
      // console.log(accountid);
      this.props.setCurEmpAccountID(accountid);
      this.props.fetchSingleEmployeeInfo(accountid);
    }

    renderEmpInfo(curEmployee) {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Employee Name
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            {curEmployee.curEmpName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Employee ID
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {curEmployee.curEmpAccountID}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Position
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {curEmployee.curEmpType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Level
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {curEmployee.curEmpLevel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Salary
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {curEmployee.curEmpSalary}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Starting Date
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            {curEmployee.curEmpStartDate}
          </Typography>
        </CardContent>
      )
    }

    // ** this is not displayed properly. I will fix it later.
    displayDefaultMessage() {
      return (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Please select an Employee.
          </Typography>
        </CardContent>
      )
    }
    
    render() {
        const {classes, employees, curEmployee, curEmpAccountID} = this.props;

        return (
            <div className={classes.root}>
            <Grid container spacing={3} justify="center" alignItems="center">
              <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Employees
              </Typography>
                <List className={classes.listRoot}>
                  {employees.map((value) => {
                    const labelId = `checkbox-list-label-${value.accountID}`;
                    return (
                      // selected={this.selectedIndex === value} disabled
                      <ListItem key={value.accountID} 
                                role={undefined} 
                                button
                                onClick={() => this.handleListItemClick(value.accountID)}>
                        <ListItemText id={labelId} primary={`EmployeeID: ${value.accountID} | Name: ${value.name}`} />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h5" gutterBottom>
                  Employee Info
                </Typography>
                <Card className={classes.listRoot} variant="outlined">
                  {
                    curEmpAccountID != 0 ? this.renderEmpInfo(curEmployee) : this.displayDefaultMessage()
                  }
                  <CardActions>
                    {/* changed "PROMOTE" to "ADD" */}
                    <Button size="small" color="primary" onClick={(event) => this.handleManage(event)}>Add</Button>
                    <Button size="small" color="primary" onClick={(event) => this.handleDelete(event)}>Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employee.employeeS,
    curEmployee: state.employee,
    curEmpAccountID: state.employee.curEmpAccountID
})

const mapActionsToProps = {
  setCurEmpAccountID,
  fetchSingleEmployeeInfo
    // openAddE,
    // closeAddE,
    // addEmployee
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(ManageEmployees));
// export default withStyles(styles)(ManageEmployees);
