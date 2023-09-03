/**
 * Execution
 *
 * - comes here from main index.js
 * - import express & v1 directory
 * - exports a fun that creates an express router -> router
 * - on V1 -> goes to v1Routes
 * - goto router/V1/index.js
 */

// ./routes/index.js
const express = require("express");
const v1Routes = require("./V1");

const router = express.Router();

router.use("/V1", v1Routes);

module.exports = router;
