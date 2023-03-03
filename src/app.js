const express = require("express");
const morgan = require("morgan");
const app = express();

const {PORT} = require("./config.js");

// Require routes
const home = require("./routes/home.routes");
const employes = require("./routes/employes.routes");

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routs
app.use("/api", home);
app.use("/api", employes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
