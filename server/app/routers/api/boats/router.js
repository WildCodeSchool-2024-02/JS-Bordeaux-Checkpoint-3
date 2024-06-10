const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const validateTuile = require("../../../services/tileExists");

router.get("/", browse);

router.put("/:id", validateTuile, edit);
/* ************************************************************************* */

module.exports = router;
