const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require('../db');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = password => bcrypt.hashSync(password, salt);

exports.signupUser = async (req, res) => {
  const { username, full_name, password } = req.body;

  const hashedPassword = hashPassword(password);
  const createUserQuery = `INSERT INTO users(full_name, username, password) VALUES($1, $2, $3) returning *`;
  try {
    const { rows } = await db.query(createUserQuery, [full_name, username, hashedPassword]);
    const dbResponse = rows[0];
    // delete dbResponse.password;
    const token = generateUserToken(dbResponse.username);
    return res.status(200).json({ user: dbResponse, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.siginUser = async (req, res) => {
  const { username, password } = req.body;
  const signinUserQuery = 'SELECT * FROM users WHERE username = $1';
  try {
    const { rows } = await db.query(signinUserQuery, [username]);
    const dbResponse = rows[0];
    console.log({ res: dbResponse });
    if (!dbResponse) {
      return res.status(404).json({ error: 'User with this username does not exist' });
    }
    if (!comparePassword(dbResponse.password, password)) {
      return res.status(400).json({ error: 'The password you provided is incorrect' });
    }
    const token = generateUserToken(dbResponse.username);
    delete dbResponse.password;
    return res.status(200).json({ user: dbResponse, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const generateUserToken = (username) => {
  const token = jwt.sign({ username }, 'jwtsecret', { expiresIn: '3d' });
  return token;
};

const comparePassword = (hashedPassword, password) => {
  console.log({ checkPassword: bcrypt.compareSync(password, hashedPassword) });
  return bcrypt.compareSync(password, hashedPassword);
};