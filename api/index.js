const express =require("express");
const router = require("./Movies/routes");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

app.use("/", router);

console.log("App is listening on port " + port);
