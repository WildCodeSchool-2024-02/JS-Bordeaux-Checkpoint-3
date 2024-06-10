const tileExists = (req, res, next) => {
  if (req.body.coord_x && req.body.coord_y && req.body.coord_x > 0 && req.body.coord_x <= 11 && req.body.coord_y > 0 && req.body.coord_y <= 5) {
    next();
  } else {
    res.sendStatus(422);
  }
};

module.exports = tileExists;






// const Joi = require("joi");

// const pokemonSchema = Joi.object({
//   name: Joi.string().max(255).required(),
//   imageUrl: Joi.string().max(255).required(),
// });

// const validatePokemon = (req, res, next) => {
//   const { error } = pokemonSchema.validate(req.body, { abortEarly: false });

//   if (error == null) {
//     next();
//   } else {
//     res.status(400).json({ validationErrors: error.details });
//   }
// };

// module.exports = validatePokemon;



// const nameValidatePokemon = (req, res, next) => {
//     if (req.body.name.length < 2) {
//       res.sendStatus(401);
//     } else {
//       next();
//     }
//   };
  
//   module.exports = nameValidatePokemon;
  