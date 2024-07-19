export const errorMiddleware = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
