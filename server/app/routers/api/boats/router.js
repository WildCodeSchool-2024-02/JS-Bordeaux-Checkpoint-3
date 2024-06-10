const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");


router.get("/", browse);

// const validateTile = require("../../../services/tileExists");
const tileExists = require("../../../services/tileExists");

router.put("/:id", tileExists, edit)

/* ************************************************************************* */

module.exports = router;
