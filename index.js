require("dotenv").config();
const express = require("express");
const { calculateLove } = require("./calculate");
const { findMessage } = require("./findMessage");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", function () {
  console.log("DB connected!");
});

app.get("/calculate/:love/:crush", (req, res) => {
  const result = calculateLove(req.params.love, req.params.crush);
  const message = findMessage(result, req.params.love, req.params.crush);
  res.json({
    yourName: req.params.love,
    crushName: req.params.crush,
    Percentage: result,
    Advice: message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
