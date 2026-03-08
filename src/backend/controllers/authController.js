const User = require("../models/User");

/*
REGISTRAR USUÁRIO POST /api/auth/register 
*/
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // verifica se já existe usuário com esse email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email já cadastrado"
      });
    }

    // cria novo usuário
    const newUser = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      user: newUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Erro ao cadastrar usuário",
      error: error.message
    });
  }
};

/*

LOGIN DE USUÁRIO  POST /api/auth/login ATENTAR !1

*/
const login = async (req, res) => {
  try {

    const { email, password } = req.body;

    // procura usuário pelo email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    // verifica senha
    if (user.password !== password) {
      return res.status(400).json({
        message: "Senha incorreta"
      });
    }

    res.json({
      message: "Login realizado com sucesso",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Erro ao realizar login",
      error: error.message
    });
  }
};

module.exports = {
  register,
  login
};