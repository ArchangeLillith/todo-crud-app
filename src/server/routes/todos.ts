import { Router } from "express";
import db from "../db";

//Our todos router
const router = Router();

//GET /api/todos/{id}
//Get one by ID
router.get("/:id", async (req, res) => {
	try {
		const id = parseInt(req.params.id, 10);
		const [todo] = await db.todos.getOne(id);
		res.json(todo);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
	}
});

// GET /api/todos/
//Get all
router.get("/", async (req, res) => {
	try {
		const todos = await db.todos.getAll();
		res.json(todos);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
	}
});

//POST /api/todos/
//req.body should look like { description: string }
router.post("/", async (req, res) => {
	try {
		const newTodo = req.body;
		const result = await db.todos.insert(newTodo.description);
		//This shows the ID that was added
		res.json({ message: "Todo created", id: result.insertId });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internanal server error", error });
	}
});

export default router;
