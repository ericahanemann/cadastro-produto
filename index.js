const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const app = express();

//routes
const productsRoutes = require("./routes/productsRoutes");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//middlewares para transformar form em json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//definição da pasta estática
app.use(express.static("public"));

//chama as rotas
app.use("/products", productsRoutes);

//roda o servidor se conseguir se conectar ao banco de dados
conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
