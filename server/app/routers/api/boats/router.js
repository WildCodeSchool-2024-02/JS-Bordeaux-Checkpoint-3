const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const middleware = require("../../../services/tileExists");
const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);
router.put("/:id/",middleware, edit);

/* ************************************************************************* */

module.exports = router;
