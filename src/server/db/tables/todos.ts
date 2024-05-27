//Single source of truth for interacting with the table of the name of the file
import { SelectQuery, ModifyQuery } from "../queryUtils";
import type { RowDataPacket } from "mysql2";

export interface ITodosRow extends RowDataPacket {
	id: number;
	description: string;
	is_completed: 0 | 1;
}

export function getAll() {
	return SelectQuery<ITodosRow>("SELECT * FROM todos;");
}

export function getOne(id: number) {
	return SelectQuery<ITodosRow>("SELECT * FROM todos WHERE id = ?;", [id]);
}

export function insert(todoItem: string) {
	return ModifyQuery("INSERT INTO todos (description) VALUE (?);", [todoItem]);
}
