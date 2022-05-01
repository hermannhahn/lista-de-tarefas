import React from "react";
import "../styles/Task.css";

const Task = ({ task, handleTaskStatus }) => {
	return (
		<>
			<li
				className="task-li"
				style={	task.completed ? { borderLeft: "6px solid chartreuse" } : {} }
				onClick={() => handleTaskStatus(task.id)}
			>
				<span className="task-title">
					{task.title}
				</span>
			</li>
		</>
	);
};

export default Task;
