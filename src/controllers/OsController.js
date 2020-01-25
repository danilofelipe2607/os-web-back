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
      dateInicial,
      dateFinal,
      descricao
    } = req.body;
    console.log(responsavel, status, numero, dateInicial, dateFinal, descricao);

    const os = await Os.find({
      date: { $gte: dateInicial, $lte: dateFinal }
    });

    return res.json(os);
  },
  //delete OS

  async deleteOs(req, res) {
    const { numero } = req.params;
    await Os.findOneAndDelete(numero);
    const os = await Os.find();
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
