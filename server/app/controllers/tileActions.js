const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tile = await tables.tile.readAll();
    console.info(tile);
    res.json(tile);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse };
