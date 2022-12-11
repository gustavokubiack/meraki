const mongoose = require("mongoose");
// criptografia de dados
// usar outra model - Post
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ongSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, required: true },
  state: String,
  city: String,
  neighborhood: String,
  street: String,
  numberHouse: String,
  telephone: String,
  cnpj: String,
  posts: [
    {
      title: String,
      chosenCause: String,
      description: String,
      state: String,
      city: String,
      neighborhood: String,
      street: String,
      numberHouse: String,
      dateCause: String,
      imageLocation: String,
      created: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],

  created: {
    type: Date,
    default: Date.now,
  },
});

// ==> responsável pelo hash do password
ongSchema.pre("save", async function (next) {
  const ong = this;
  if (ong.isModified("password")) {
    ong.password = await bcrypt.hash(ong.password, 8);
  }
  next();
});

// ==> gerar um token para o usuário
ongSchema.methods.generateAuthToken = async function () {
  const ong = this;
  const token = jwt.sign(
    { _id: ong._id, name: ong.name, email: ong.email },
    "secret"
  );
  ong.tokens = ong.tokens.concat({ token });
  await ong.save();
  return token;
};

// ==> verificar se existe o email e senha do usuário
ongSchema.statics.findByCredentials = async function (email, password) {
  const ong = await Ong.findOne({ email });
  if (!ong) {
    throw new Error("Usuário não encontrado!");
  }
  const isMatch = await bcrypt.compare(password, ong.password);
  if (!isMatch) {
    throw new Error("Senha incorreta!");
  }
  return ong;
};

const Ong = mongoose.model("Ong", ongSchema);
module.exports = Ong;
