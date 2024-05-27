import { query } from "express";
import pool from "./connections";
import type { ResultSetHeader } from "mysql2";

export async function SelectQuery<T>(
	queryString: string,
	params?: []
): Promise<Partial<T>[]> {
	const [results] = await pool.execute(queryString, params);
	return results as T[];
}

//Any is meant to be here to get this up and running cause we could modify anything (string, number, object)
//REFACTOR we'll change the typing here once we know what could be the 
export async function ModifyQuery(
	queryString: string,
	params?: any[]
): Promise<ResultSetHeader> {
	const [results] = await pool.query(queryString, params);
	return results as ResultSetHeader;
}
