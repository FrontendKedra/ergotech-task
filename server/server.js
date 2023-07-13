const express = require("express");
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(cors());
app.use("/", blogRoutes);

app.listen(3500, () => console.log("Server listening on port 3500"));
