function isValidUsername (req, res, next) {
  const { username } = req.body;

  if(!username || username.length < 3){
    return res.status(400).json({ message: 'Invalid data'});
  }

  next();
}

function isValidEmail (req, res, next) {
  const { email } = req.body;

  if(!email || !email.includes('@') || !email.includes('.com')) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }
  next();
}

function isValidPassword (req, res, next) {
  const { password } = req.body;
  const passRegex = /^[0-9]*$/

  if(!password.match(passRegex) || password.lenght < 3 || password.lenght > 8){
    return res.status(400).json({ message: 'email or password is incorrect' });
  }
  next();
}

function isValidToken (req, res, next) {
  const { token } = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  if(!token || tokenRegex.test(token)){
    return res.status(401).json({ message: 'invalid token'});
  }
  next();
};

function isValid(req, res, next) {
  const { name, initials, country, league } = req.body;
  if(
    !name || name.length < 5 ||
    !initials || initials.length > 3 || 
    !country || country.length < 3
    ){
    return res.status(400).json({ message: 'invalid data' });
  }
  next();
}

module.exports = {
  isValidUsername,
  isValidEmail,
  isValidPassword,
  isValidToken,
  isValid,
};
