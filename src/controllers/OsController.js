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
    console.log(req.body, "req.body");
    const os = await Os.find({
      date: { $gte: dateInicial, $lte: dateFinal }
    });
    console.log(os, "ossssssssssssssssss");

    if (os != null) {
      if (descricao != "") {
        const teste = await Os.find({ descricao: descricao });
        console.log(teste, "descricao");
      }
    }
    return res.json(os);
  },
  //delete OS

  async deleteOs(req, res) {
    const { id } = req.params;
    await Os.findOneAndDelete(id);
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
      tecnico,
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
  },

  async edit(req, res) {
    console.log("aquiiiiiiiiiiiiiiiii", req.body);
    const {
      descricao,
      numero,
      responsavel,
      valor,
      type,
      description,
      date,
      status,
      tecnico,
      url,
      observacao,
      search
    } = req.body;

    const os = await Os.findOneAndUpdate(req.body, {
      new: true
    });
    console.log("osssssss", os);
    return res.json(os);
  }
};
