import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../services/fetchData";

interface AddProps {}
const Add = (props: AddProps) => {
	const navigate = useNavigate();
	const [value, setValue] = React.useState<string>("");

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		fetchData("/api/todos", "POST", { description: value }).then((data) =>
			navigate(`/todos/${data.id}`)
		);
	};
	return (
		<main className="container mt-5">
			<section className="row justify-content-center">
				<div className="col-12 col-md-6">
					<form className="p-4 shadow border">
						<label htmlFor="description">Todo item description</label>
						<input
							value={value}
							onChange={(e) => setValue(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Do all the things!"
						/>
						<button onClick={handleSubmit} className="btn btn-primary mt-3">
							Add Todo
						</button>
					</form>
				</div>
			</section>
		</main>
	);
};

export default Add;
