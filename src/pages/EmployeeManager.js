import React, { Component } from 'react';

import NavBarLP from '../components/NavBarLP';

// Components
import AddEmployee from '../components/add/AddEmployee';
import ManageEmployees from '../components/manage/ManageEmployees';

// redux
import { connect } from 'react-redux';
import { fetchAllEmployeesInfo } from '../redux/actions/employeeAction';

export class EmployeeManager extends Component {

    componentDidMount() {
        this.props.fetchAllEmployeesInfo();
    }

    render() {
        return (
            <div>
                <NavBarLP/>
                <ManageEmployees/>
                {/*move the add feature to <ManageEmployes/> remove promotion feacture to reduce scope*/}
                {/* <AddEmployee/> to be deleted */}
                <AddEmployee/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employee.employeeS
})

export default connect(mapStateToProps,{fetchAllEmployeesInfo})(EmployeeManager);
