import Boom from 'boom';

const createBoomError = (statusCode, message, data) => {
    const error = Boom.boomify(new Error(message), { statusCode });
    error.output.payload.data = data;
    return error;
};

export default createBoomError;
