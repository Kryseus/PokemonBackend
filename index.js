import express from "express";
import pokemonRouter from "./routes/pokemonRouter";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello fucking Internet!"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));