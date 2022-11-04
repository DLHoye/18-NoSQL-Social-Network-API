const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes/"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.listen(Port, () => {
  console.log(`App running on port ${Port}!`);
});
