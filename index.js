import express from "express";
import { createRequire } from "module";

const app = express();
const port = process.env.PORT || 5000;

const require = createRequire(import.meta.url);
const pokeData = require("./db/Pokemon.json");


app.get("/", (req, res) => res.send(pokeData));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
