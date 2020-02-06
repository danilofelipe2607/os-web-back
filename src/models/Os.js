const mongoose = require("mongoose");
const uuid = require("uuid/v4");
const OsSchema = new mongoose.Schema(
  {
    thumbnail: String,
    descricao: String,
    numero: Number,
    responsavel: String,
    valor: Number,
    id: { type: String, default: uuid },
    type: String,
    description: String,
    date: Date,
    status: String,
    url: String,
    tecnico: String,
    observacao: String,
    search: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },

  {
    toJSON: {
      virtuals: true
    }
  }
);
OsSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});
module.exports = mongoose.model("Os", OsSchema);
