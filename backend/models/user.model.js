const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: String, required: true },
  cpf: { type: String, required: true },
  chosenCause: [
    {
      post: {
        title: String,
        chosenCause: String,
        description: String,
        image: String,
        state: String,
        city: String,
        neighborhood: String,
        street: String,
        numberHouse: String,
        dateCause: String,
        ong: String,
        created: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
  tokens: [
    {
      token: { type: String, required: true },
    },
  ],
});

// ==> responsável pelo hash do password
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// ==> gerar um token para o usuário
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    "secret"
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// ==> verificar se existe o email e senha do usuário
userSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Usuário não encontrado!");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Senha incorreta!");
  }
  return user;
};
const User = mongoose.model("User", userSchema, "user");
module.exports = User;
