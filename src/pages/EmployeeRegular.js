import React, { Component } from 'react';
import NavBarLP from '../components/NavBarLP';

// Components
import AddHorse from '../components/add/AddHorse';
import ManageHorses from '../components/manage/ManageHorses';
import AddJockey from '../components/add/AddJockey';
import ManageJockeys from '../components/manage/ManageJockeys';
import AddRace from '../components/add/AddRace';
import ManageRaces from '../components/manage/ManageRaces';
import AddStadium from '../components/add/AddStadium';
import ManageStadiums from '../components/manage/ManageStadiums';

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
                {/* <AddHorse/> */}

                {/* <ManageJockeys/> */}
                {/* <AddJockey/> */}

                {/* <ManageRaces/> */}
                {/* <AddRace/> */}

                {/* <ManageStadiums/> */}
                {/* <AddStadium/> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    horses: state.horses
})

export default connect(mapStateToProps,{fetchAllHorses})(EmployeeRegular);
