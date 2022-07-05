const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'Usuário já está cadastrado.' })
    }

    const passwordHash = await bcrypt.hashSync(password, 10);

    try {
      const newUser = new User({
        name,
        email,
        password: passwordHash,
      });
      newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado.' })
    }

    const passwordCompare = await bcrypt.compare(password, user.password)

    if (!passwordCompare) {
      return res.status(400).json({ error: 'Usuário não encontrado.' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 30
    });

    res.status(200).json({ message: 'Autenticação realizada com sucesso', token })
  }
}

module.exports = new UserController();
