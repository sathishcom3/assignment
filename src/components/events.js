import React from "react";
import { connect } from 'react-redux';
import memberStyle from "../styles/members.module.css";

class Events extends React.Component {
    state = {
        eventList: [],

    }

    componentDidMount() {
        let eventList = [...this.props.eventList];
        eventList.map(elem => {
            elem["isToggle"] = true;
        })
        this.setState({ eventList: [...this.props.eventList] });
    }

    toggleEvent = (index) => {
        let eventList = [...this.state.eventList];
        eventList[index].isToggle = !eventList[index].isToggle;
        console.log("eventList ", eventList);
        this.setState({ eventList: eventList });
    }

    render() {
        const { eventList } = this.state;
        return (
            <>
                <span>Events</span>
                <table>
                    <thead>
                        <tr>
                            <td>Organiser</td>
                            <td>Company</td>
                            <td>About</td>
                            <td>Schedules</td>
                            <td>Duration</td>
                            <td>Capacity</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eventList?.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.isToggle ? val.Organiser : null}</td>
                                        <td>{val.isToggle ? val.company : null}</td>
                                        <td>{val.isToggle ? val.about : null}</td>
                                        <td>{val.isToggle ? val.schedules : null}</td>
                                        <td>{val.isToggle ? val.duration : null}</td>
                                        <td>{val.isToggle ? val.capacity : null}</td>
                                        <td><button onClick={() => this.toggleEvent(key)}>Toggle display</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        eventList: state.eventReducer.eventList
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);