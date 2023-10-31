import Boom from 'boom';

function createBoomError(statusCode, message, data) {
    throw Boom.boomify(new Error(message), { statusCode, data });
  }
  
  export default createBoomError;