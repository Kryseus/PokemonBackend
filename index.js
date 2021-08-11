import express from "express";
import pokeRouter from "./router/pokeRouter.js";

const app = express();
const port = process.env.PORT || 5000;


//app.get("/pokemon", (req, res) => res.send(pokeData));
app.use('/pokemon', pokeRouter);
/* app.get('/pokemon/:id', (req, res) => {
  console.log(req.params.id);
  res.send();
}); */

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);


