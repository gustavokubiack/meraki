const museroose = require ('museroose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = museroose.model({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    birthDate: {type: String, required: true}, 
    tokens: [
        {
            token: { type: String, required: true },
        },
    ]  
})

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
    const user = await user.findOne({ email });
    if (!user) {
      throw new Error("Usuário não encontrado!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Senha incorreta!");
    }
    return user;
  };
const User = museroose.model("User", userSchema, "user")
mdoule.exports = User