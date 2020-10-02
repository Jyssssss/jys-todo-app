import React from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.item;
    }

    render() {
        const itemId = "todo_item_" + this.state.id;
        return (
            <div className="todo-item">
                <input
                    id={itemId}
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={() => this.props.onChange()} />
                <p>
                    <label htmlFor={itemId}>{this.state.text}</label>
                </p>
            </div>
        )
    }
}

export default TodoItem 