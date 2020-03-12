require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
const validarLogin = require("./controllers/SessionController");

const app = express();
const service = { tenant: "tenant2" };
const conexao = `mongodb+srv://admin:123@cfc-kkhx8.mongodb.net/${service.tenant}?retryWrites=true&w=majority`;
mongoose.connect(conexao, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads"))); //retorna arquivos
app.use(routes);

const host = "0.0.0.0";
const port = process.env.PORT || 3335;
app.listen(port, host, function() {
  console.log("Server started.......");
});
