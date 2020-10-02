import React from "react"


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.style = props.style ?? {
            textAlign: "right",
            marginRight: "2%",
            fontSize: "3vh",
            fontFamily: "Gill Sans , sans-serif"
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div style={this.style}>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}

export default Clock