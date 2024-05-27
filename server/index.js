const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`listening on port... ---: ${port}`);
});
