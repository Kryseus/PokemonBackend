import { Router } from "express";
//import express from 'express';
import {
  createSingle,
  getAll,
  getSingle,
  updateSingle,
  deleteSingle,
} from "../controllers/pokeController.js";

const pokeRouter = Router();
//const pokeRouter = express.Router();

pokeRouter.get("/", getAll);
pokeRouter.get("/:id", getSingle);
pokeRouter.post("/", createSingle);
pokeRouter.put("/:id", updateSingle);
pokeRouter.delete("/:id", deleteSingle);

export default pokeRouter;
