const express = require("express");
const app = express();
const cors = require("cors");
const routerApi = require("./routes");

const port = 3001
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("good");
});

routerApi(app)

app.listen(port, () => {
    console.log(`im running in port ${port}`);
  });