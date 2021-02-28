import React from "react";
import memberStyle from "../styles/members.module.css";

import Member from "./members";
import Events from "./events";

class ContainerComp extends React.Component {
    render() {
        return (
            <>
                <div className={memberStyle.row}><Member /></div>
                <div className={`${memberStyle.row} ${memberStyle.paddingLeft}`} ><Events /></div>
            </>
        );
    }
}

export default ContainerComp;