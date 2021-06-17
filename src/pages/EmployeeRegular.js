import React, { Component } from 'react';
import NavBarLP from '../components/NavBarLP';

// Components
import ManageHorses from '../components/manage/ManageHorses';
import ManageJockeys from '../components/manage/ManageJockeys';
import ManageRaces from '../components/manage/ManageRaces';
import ManageStadiums from '../components/manage/ManageStadiums';
import ManageSuppliers from '../components/manage/ManageSuppliers';

// redux
import { connect } from 'react-redux';
import { fetchAllHorses } from '../redux/actions/horseAction';
import { fetchAllJockeys } from '../redux/actions/jockeyAction';
import { fetchAllStadiums } from '../redux/actions/stadiumAction';
import { fetchAllSuppliers } from '../redux/actions/supplierAction';

export class EmployeeRegular extends Component {

    componentDidMount() {
        this.props.fetchAllHorses();
    }

    render() {
        return (

            <div>
                <NavBarLP/>
                <ManageHorses/>

                <ManageJockeys/>

                {/* <ManageRaces/> */}

                <ManageStadiums/>

                <ManageSuppliers/>
            </div>
        )
    }
}


const mapActionsToProps = {
    fetchAllHorses,
    fetchAllJockeys,
    fetchAllStadiums,
    fetchAllSuppliers
}

export default connect(null ,mapActionsToProps)(EmployeeRegular);
