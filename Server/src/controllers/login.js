const users = require('../utils/users');

exports.login = (req, res) => {
  const { email, password } = req.query;

  const user = find((user) => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
}

