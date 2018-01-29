const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({
      status: 'ERROR',
      code: 'missing_token',
      message: 'Auth failed.'
    });
  }

  try {
    request.userData = jwt.verify(token.split(' ')[1], process.env.JWT_KEY);
    next();
  } catch(error) {
    return response.status(401).json({
      status: 'ERROR',
      code: 'expired_token',
      message: 'Auth failed.'
    });
  }
};