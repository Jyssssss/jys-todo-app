import React from "react"

import TodoItem from "./TodoItem"
import todoData from "../data_templates/todoData"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todoData
        };
    }

    render() {
        return (
            <div className="todo-list">
                {
                    this.state.todos.map((item, i) =>
                        <TodoItem
                            key={item.id}
                            item={item}
                            onChange={() => this.handleChange(i)}
                        />
                    )
                }
            </div>
        )
    }

    handleChange(i) {
        this.setState(prevState => {
            const todos = prevState.todos.slice();
            todos[i].completed = !todos[i].completed;
            return {
                todos: todos
            };
        });
    }
}

export default TodoList