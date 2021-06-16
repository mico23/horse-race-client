import React, { Component } from 'react';

// Components
import AddSupplier from '../components/add/AddSupplier';
import ManageSuppliers from '../components/manage/ManageSuppliers';

export class EmployeeSupplier extends Component {
    render() {
        return (
            <div>
            <ManageSuppliers/>
            <AddSupplier/>
            </div>
        )
    }
}

export default EmployeeSupplier;
