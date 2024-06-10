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
  // Extract the item data from the request body
  const boat = req.body;
  try {
    // Insert the item into the database
    const insertId = await tables.boat.update(boat, req.params.id);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(204).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  edit,
};
