import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

interface Item {
	id: number;
	name: string;
}

function App() {
	const [items, setItems] = useState<Item[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/items", { withCredentials: true });
				console.log(response.data);
				setItems(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		// Fetch data from the Flask backend
		fetchData();
	}, []);

	return (
		<div className="App">
			<h1>Items from Python Backend</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
