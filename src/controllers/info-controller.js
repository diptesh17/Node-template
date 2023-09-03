const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    message: "API is live",
    success: true,
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};

/**
 *
 * res.status(500)-> return obj of that code
 * res.json() -> on same we apply json
 * it again returns the same object
 */
