import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: "localhost",
	user: "todo_user",
	password: "password123",
	database: "todo_db",
});

export default pool;
