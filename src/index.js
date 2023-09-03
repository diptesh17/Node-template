/**
 * Execution
 *
 *  - import -> express , port , apiROutes from routes
 *  - when req -> /api -> tells express to use apiRoutes
 *  - and start the server
 *  - go to router's -> index.js
 *
 *
 * Summary
 *
 *
 */

// main server file (app.js or index.js)
const express = require("express");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log("Server started on port " + ServerConfig.PORT);
  Logger.info("Successfully started the server ", {});
});

/**
 * Routing
 *  - refers to , how url respond to client req
 *  - we can handle routing req using http methods ex  -> get & post
 *  - app.all() -> handles all http methods
 *  - app.use() -> specifies m.ware as callback fun -> registers m.ware
 */
