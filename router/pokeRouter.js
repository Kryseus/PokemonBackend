import { Router } from "express";
//import express from 'express';
import { getAll, getSingle } from "../controllers/pokeController.js";

const pokeRouter = Router();
//const pokeRouter = express.Router();

pokeRouter.get("/", getAll);
pokeRouter.get("/:id", getSingle);

export default pokeRouter;
