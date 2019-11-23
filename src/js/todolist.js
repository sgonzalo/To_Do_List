import React from "react";
//import TodoInput from "./todoinput";
import TodoItem from "./todoitem";
import TodoData from "./tododata";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			TodoData
		};
	}

	render() {
		const allTodoItems = this.state.TodoData.map(item => (
			<TodoItem key={item.id} item={item} />
		));

		return (
			<div className="todo-list">
				<h1>To Do</h1>
				<div className="todo-item">
					<input
						type="text"
						id="myInput"
						name="myInput"
						maxLength="100"
						placeholder="Enter text Here"
					/>{" "}
				</div>
				{allTodoItems}
			</div>
		);
	}
}

export default TodoList;
