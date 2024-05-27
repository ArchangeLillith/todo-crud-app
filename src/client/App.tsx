//npm run dev to start the project
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
interface AppProps {}
import Home from "./views/Home";
import Todos from "./views/Todos";
import Details from "./views/Details";
import Add from "./views/Add";
import NotFound from "./views/NotFound";

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<div className="px-5 py-2">
				<Link to="/">Home</Link>
				<Link to="/todos">Todo</Link>
				<Link to="/todos/new">Add</Link>
			</div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/todos" element={<Todos />}></Route>
				<Route path="/todos/:id" element={<Details />}></Route>
				<Route path="/todos/new" element={<Add />}></Route>
				<Route path="/*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
