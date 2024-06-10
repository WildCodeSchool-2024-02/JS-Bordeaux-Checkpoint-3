const express = require("express");

const router = express.Router();

// const tileExists = require("../../services/tileExists");

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// router.use(tileExists);

const boatsRouter = require("./boats/router");

router.use("/boats", boatsRouter);

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

const tilesRouter = require("./tiles/router");

router.use("/tiles", tilesRouter);

/* ************************************************************************* */

module.exports = router;
