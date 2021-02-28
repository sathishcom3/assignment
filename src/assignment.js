import React from "react";
import { connect } from 'react-redux';
import { assignmentAction } from './actions/assignmentActions';

class Assignment extends React.Component {
    save = () => {
        this.props.save("save param");
    }

    render() {
        return (
            <div>
                <button onClick={this.save}>Call</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        save: (reqParam) => dispatch(assignmentAction(reqParam))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Assignment);