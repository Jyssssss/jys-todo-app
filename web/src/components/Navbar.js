import React from "react"

import Clock from "./Clock"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.title = props.title ?? "My Todo";
        this.dateStyle = props.dateStyle ?? null;
    }

    render() {
        return (
            <div className="navbar" >
                <div className="navbar-title">{this.title}</div>
                <Clock style={this.dateStyle} />
            </div>
        )
    }
}

export default Navbar