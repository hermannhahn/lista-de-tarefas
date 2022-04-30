import React, { useState } from "react";

import "../styles/App.css";
import Tasks from "./Tasks";

const jsonData = require("../api/database.json");

const App = () => {
	const [tasks, setTasks] = useState(jsonData);
	return (
		<>
			<h2>Lista de Tarefas</h2>
			<div className="container">
				<Tasks tasks={tasks} />
			</div>
		</>
	);
};

export default App;
