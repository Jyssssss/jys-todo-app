import React from "react"

import Navbar from "./Navbar"
import TodoList from "./TodoList"

function App() {
    return (
        <div>
            <Navbar title="JYS's Todo" />
            <TodoList />
        </div>
    )
}

export default App