const tables = require("../../database/tables")

const tileExists = async (req, res, next) => {
   const coordX = req.body.coord_x;
   const coordY = req.body.coord_y;
   const check = await tables.tile.readByCoordinates(coordX, coordY)
   if(check.length > 0) {
      next()
   } else {
      res.sendStatus(422);
   }
};

module.exports = tileExists;
