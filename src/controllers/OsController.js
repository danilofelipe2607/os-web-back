const Os = require("../models/Os");
const User = require("../models/User");

module.exports = {
  //index get
  async index(req, res) {
    const os = await Os.find();
    return res.json(os);
  },

  async getFiltro(req, res) {
    const {
      responsavel,
      status,
      numero,
      dataInicial,
      dataFinal,
      descricao
    } = req.body;
    console.log(dataInicial);
    // const os = await Os.find({
    //   responsavel: responsavel,
    //   status: status,
    //   numero: numero
    // });

    const teste = await Os.where(c => c.date >= dataInicial);
    console.log("osstestess", teste);
    return res.json(os);
  },

  //create post
  async store(req, res) {
    // const { filename } = req.file;
    const {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      date,
      status,
      url,
      observacao,
      search
    } = req.body;

    const os = await Os.create({
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      date,
      status,
      url,
      observacao,
      search
    });
    return res.json(os);
  }
};
