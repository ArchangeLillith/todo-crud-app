import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../services/fetchData";
import type { ITodo } from "../types";

interface TodosProps {}

const Todos = (props: TodosProps) => {
	const [list, setList] = useState<ITodo[]>([]);

	useEffect(() => {
		fetchData("/api/todos").then((list) => setList(list));
	}, []);

	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<ul className="list-group">
						{list.map((todo) => (
							<li
								className="list-group-item d-flex justify-content-between align-items-center"
								key={`todo-item-${todo.id}`}
							>
								<span>{todo.description}</span>
								<Link
									to={`/todos/${todo.id}`}
									className="btn btn-sm btn-secondary"
								>
									Details
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Todos;
