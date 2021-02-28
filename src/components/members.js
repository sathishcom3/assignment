import React from "react";
import { connect } from 'react-redux';
import memberStyle from "../styles/members.module.css";
import { addEvent } from "../actions/memberAction";
import {memberTypes} from "../types/member_type";

class Member extends React.Component {

    state = {
        memberList: [],
        nameSort: true, // true -> asec, false -> desec
        ageSort: true, // true -> asec, false -> desec
        addEventForm: false,
        addEventMemberIndex: null,
        selectedEventName: ""
    }

    componentDidMount() {
        this.setState({ memberList: [...this.props.memberList] });
    }

    ageSort = (prevSortOrder) => {
        let ageSortList = [...this.state.memberList];
        if (prevSortOrder) { // do ascending
            ageSortList.sort(function (a, b) { return (a.age > b.age) ? 1 : ((b.age > a.age) ? -1 : 0); });
        } else { // do desecnding
            ageSortList.sort(function (a, b) { return (a.age < b.age) ? 1 : ((b.age < a.age) ? -1 : 0); });
        }
        this.setState({ memberList: ageSortList, ageSort: prevSortOrder });
    }

    nameSort = (prevSortOrder) => {
        let nameSortList = [...this.state.memberList]
        if (prevSortOrder) { // do ascending
            nameSortList.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        } else { // do desecnding
            nameSortList.sort(function (a, b) { return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0); });
        }
        this.setState({ memberList: nameSortList, nameSort: prevSortOrder });
    }

    deleteMember = (index) => {
        let deleteMember = [...this.state.memberList]
        deleteMember.splice(index, 1);
        this.setState({ memberList: deleteMember });
    }

    addEvent = (index) => {
        this.setState({ addEventForm: true, addEventMemberIndex: index });
    }

    highlightsEvents = (index) => {
        console.log("highlight event ", index);
    }

    eventSelect = (event) => {
        this.setState({ selectedEventName: event.target.value })
    }

    saveEvent = (event) => {
        event.preventDefault();
        let memberList = [...this.state.memberList]
        const { addEventMemberIndex } = this.state;
        let memberToBeAddedEvent = memberList[addEventMemberIndex];
        this.props.addEvent(memberToBeAddedEvent.name, this.state.selectedEventName);
    }

    addEventForm = () => {
        let memberList = [...this.state.memberList]
        const { addEventMemberIndex } = this.state;
        const { eventList } = this.props;
        let memberToBeAddedEvent = memberList[addEventMemberIndex];

        return (
            <span>
                <span>Add Event</span>
                <form>
                    <span>{memberToBeAddedEvent?.name}</span><br />
                    <select name="eventName" onChange={this.eventSelect}>
                        {eventList.map((val, key) => {
                            return (<option key={key} >{val.Organiser}</option>)
                        })}
                    </select>
                    <button type="button" onClick={(e) => this.saveEvent(e)}>Save</button>
                </form>
            </span>
        )
    }

    render() {
        const { memberList, nameSort, ageSort, addEventForm } = this.state;
        return (
            <>
                <span> Members </span>
                <table>
                    <thead>
                        <tr>
                            <td onClick={() => this.nameSort(!nameSort)}>Name</td>
                            <td onClick={() => this.ageSort(!ageSort)}>Age</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Company</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            memberList?.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.name}</td>
                                        <td>{val.age}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.email}</td>
                                        <td>{val.company}</td>
                                        <td>
                                            <span className={memberStyle.actionStyles} onClick={() => this.deleteMember(key)}>Delete</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {addEventForm && this.addEventForm()}
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        memberList: state.memberReducer.memberList,
        eventList: state.eventReducer.eventList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEvent: (memberName, eventName) => dispatch({ type: memberTypes.ADD_EVENT, data: { memberName, eventName } })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Member);