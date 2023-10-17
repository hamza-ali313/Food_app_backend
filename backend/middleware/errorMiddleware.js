// middleware/errorMiddleware.js
export const errorMiddleware = (err, req, res, next) => {
    // Check if the error has a status code; otherwise, set it to 500 (Internal Server Error)
    const statusCode = err.statusCode || 500;
    
    // Respond with the error message and status code
    res.status(statusCode).json({ error: err.message });
  };
  