import express from "express";
import { getAll, getSingle } from "../controllers/pokeController.js";

const pokeRouter = express.Router();

recipeRouter.get("/", getAll);
recipeRouter.get("/:id", getSingle);

export default recipeRouter;
