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

                <ManageRaces/>

                <ManageStadiums/>

                <ManageSuppliers/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    horses: state.horses
})

export default connect(mapStateToProps,{fetchAllHorses})(EmployeeRegular);
