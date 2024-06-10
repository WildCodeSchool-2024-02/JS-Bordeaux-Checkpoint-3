

const tileExists = (req, res, next) => {
  const coordx = req.body.coord_x;
  const coordy = req.body.coord_y;

  if (coordx >= 0 && coordx <= 11 && coordy >= 0 && coordy <= 5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;
