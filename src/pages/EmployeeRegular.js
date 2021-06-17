import React, { Component } from 'react';
import NavBarLP from '../components/NavBarLP';

// Components
import ManageHorses from '../components/manage/ManageHorses';
import ManageJockeys from '../components/manage/ManageJockeys';

// redux
import { connect } from 'react-redux';
import { fetchAllHorses } from '../redux/actions/horseAction';
import { fetchAllJockeys } from '../redux/actions/jockeyAction';

export class EmployeeRegular extends Component {

    componentDidMount() {
        this.props.fetchAllHorses();
        this.props.fetchAllJockeys();
    }

    render() {
        return (

            <div>
                <NavBarLP/>
                <ManageHorses/>
                <ManageJockeys/>
            </div>
        )
    }
}


const mapActionsToProps = {
    fetchAllHorses,
    fetchAllJockeys,
}

export default connect(null ,mapActionsToProps)(EmployeeRegular);
