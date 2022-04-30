import React from "react";
import '../styles/AddTask.css';
import Button from "./Button";

const AddTask = () => {
	return (
		<>
			<div className="add-task-container">
				<input className="add-task-input" type="text" />
				<div className="add-task-button-container">
					<Button>+</Button>
				</div>
			</div>
		</>
	);
};

export default AddTask;
