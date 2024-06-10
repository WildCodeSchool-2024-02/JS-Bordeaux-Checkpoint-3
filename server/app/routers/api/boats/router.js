const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, edit } = require("../../../controllers/boatActions");
const tileExists = require("../../../services/tileExists");

router.get("/", browse);
// Le middleware vérifie l'exactitude des données, se place donc avant le controlleur
router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
