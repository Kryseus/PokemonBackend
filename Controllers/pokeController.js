import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pokeData = require("../db/Pokemon.json");

export const getAll = (req, res) => res.status(200).json(pokeData);

export const getSingle = (req, res) => {
  const { id } = req.params;
  const pokemon = pokeData.find((pokemon) => pokemon.id === Number(id));
  if (!pokemon)
    res.status(404).json({ error: `Pokemon with id of ${id} does not exist` });
  res.status(200).json(pokemon);
};
