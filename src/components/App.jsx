import React, { useState } from "react";

import Tasks from "./Tasks";
import AddTask from "./AddTask";

import "../styles/App.css";

const App = () => {
	const jsonData = require("../api/database.json");
	const [tasks, setTasks] = useState(jsonData);
	return (
		<>
			<h2>Lista de Tarefas</h2>
			<div className="container">
				<AddTask />
				<Tasks tasks={tasks} />
			</div>
		</>
	);
};

export default App;
