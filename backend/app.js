// importando as dependências
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dbConfig = require("./config/db.config");

//criando a aplicação
const app = express();
const port = process.env.PORT || 3339;

// importando as rotas da aplicação
const index = require("./routes/index.routes");
const postRouter = require("./routes/posts.routes"); // apagar essa rota depois
const ongRouter = require("./routes/ong.routes");
const userRouter = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(morgan("dev"));

// conexão com o mongoDB
app.set("connection", dbConfig);

// rotas da aplicação
app.use(index);
app.use("/api/post/", postRouter);
app.use("/api/ong/", ongRouter);
app.use("/api/user", userRouter);

// iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
