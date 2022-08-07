const mongoose = require("mongoose");

// criptografia de dados

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ongSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50, required: true },
  email: { type: String, maxlength: 30, required: true },
  password: { type: String, required: true },
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

// ==>
ongSchema.statics.findByCredentials = async function (email, password) {
  const ong = await ong.findOne({ email });
  console.log(ong);

  if (!ong) {
    throw new Error({ error: "Login inválido" });
  }

  const isPasswordMatch = await bcrypt.compare(password, ong.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Login inválido" });
  }
  return ong;
};

module.exports = mongoose.model("Ong", ongSchema);
