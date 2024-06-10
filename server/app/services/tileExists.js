const middleware = (req, res, next) => {
  
    // put your validation rules here
  
    if ( req.body.coord_x === 0) {
      next();
    } else {
        res.sendStatus(422);
    };
    if ( req.body.coord_y === 0) {
        next();
      } else {
        res.sendStatus(422);
      }
  };

  
  module.exports = middleware;
