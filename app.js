import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am babel in node JS",
    status: "Succes",
  });
});

app.listen(port, function () {
  console.log(`server running at http://localhost:${port}`);
});
