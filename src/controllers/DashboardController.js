const Os = require("../models/Os");
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;
    console.log(user_id);
    const os = await Os.find({ user: user_id });
    return res.json(os);
  }
};
