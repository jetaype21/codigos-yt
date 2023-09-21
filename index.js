import express from "express";
import books from "./assets/books.json" assert { type: "json" };

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

// ruta para books
app.get("/books", (req, res) => {
  // devolver todos los libros
  res.json(books);
});

app.listen(port, () => {
  console.log(`el servidor corriendo en el puerto ${port}!`);
});
