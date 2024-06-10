const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const item = {
    coord_x: req.body.coord_x,
    coord_y: req.body.coord_y,
    id: req.params.id,
  };

  try {
    const result = await tables.boat.update(item);

    res.status(204).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
