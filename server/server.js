const express = require('express');
const app = express();
require("dotenv").config({ path: "../.env" });
const dbConfig = require("./config/dbConfig");
app.use(express.json());

const theatresRoute = require("./routes/theatresRoute");
const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");

app.use("/api/users",usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theatres", theatresRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node JS Server is running on port ${port}`));