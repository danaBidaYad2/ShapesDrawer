export function errorMiddleware(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.status,
    message: err.message,
  });
}
