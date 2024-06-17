const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/api/choice", (req, res) => {
  const choices = ["steen", "papier", "schaar"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  res.json({ computerChoice });
});

app.post("/api/result", (req, res) => {
  const userChoice = req.body.userChoice;
  const computerChoice = req.body.computerChoice;

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Gelijkspel!";
    } else if (
      (userChoice === "steen" && computerChoice === "schaar") ||
      (userChoice === "papier" && computerChoice === "steen") ||
      (userChoice === "schaar" && computerChoice === "papier")
    ) {
      return "Je wint!";
    } else {
      return "Je verliest!";
    }
  };

  const result = determineWinner(userChoice, computerChoice);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});
