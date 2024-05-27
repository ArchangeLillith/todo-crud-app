import { Router } from "express";
import todosRouter from "./todos";

//Our API router
const router = Router();

router.use("/todos", todosRouter);

export default router;
