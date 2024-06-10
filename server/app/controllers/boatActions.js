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
  try {
    const boat = {coord_x:req.body.coord_x, coord_y:req.body.coord_y, id:req.params.id} 
    await tables.boat.update(boat);
    res.send(204);
  }   catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
}

module.exports = {
  browse, edit
};
