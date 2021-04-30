const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`API PORT IS LISTENING ON htpp://localhost:${PORT}`);
  
});