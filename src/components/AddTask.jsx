import React, { useState } from "react";
import '../styles/AddTask.css';
import Button from "./Button";

const AddTask = ({handleTaskAdd}) => {
	const [inputData, setInputData] = useState("");

	const getInputOnChange = (e) => {
		setInputData(e.target.value);
	}

	const handleAddTask = () => {
		handleTaskAdd(inputData);
		setInputData("");
	}

	return (
		<>
			<div className="add-task-title">Adicione uma tarefa:</div>
			<div className="add-task-container">
				<input
					onChange={getInputOnChange}
					className="add-task-input"
					type="text"
					value={inputData}
				/>
				<div className="add-task-button-container">
					<Button onClick={handleAddTask}>+</Button>
				</div>
			</div>
		</>
	);
};

export default AddTask;
