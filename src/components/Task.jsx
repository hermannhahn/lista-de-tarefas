import React from "react";
import "../styles/Task.css";

const Task = ({ task, handleTaskStatus, handleTaskRemove, handleTaskDescription }) => {
	let statusClass = "";
	let statusText = "";
	let descClass = "";
	if (!task.completed) { statusClass = "complete-task"; statusText = "V"; } else { statusClass = "uncomplete-task"; statusText = "U"; }
	if (!task.showdesc) { descClass = "hidden"; } else { descClass = "task-desc"; }
	return (
		<>
			<li
				className="task-li"
				style={
					task.completed ? {
						borderTop: "6px solid chartreuse",
						paddingTop: "9px"
					}:
						task.showdesc ? {
							borderBottomLeftRadius: "0px",
							borderBottomRightRadius: "0px",
							backgroundColor: "#2395e0",
							color: "#eee"							
						} : {}
				}
			>

				<div
					className="task-title"
					onClick={() => handleTaskDescription(task.id)}
				>
					{task.title}
				</div>

				<div className="buttons-container">
					<button className={statusClass} onClick={() => handleTaskStatus(task.id)}>{statusText}</button>
					<button className="remove-task" onClick={() => handleTaskRemove(task.id)}>X</button>
				</div>
			</li>

			<div className={descClass}>{task.description}</div>
		</>
	);
};

export default Task;
