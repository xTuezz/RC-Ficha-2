const http = require("http");

const express = require("express");
const app = express();


const PORT = 3000;

const cards = [
  { name: "Recursive", type: "Killer", health: 2009, stamina: 110 },
  { name: "Ethan", type: "Survivor", health: 4, stamina: 100 },
  { name: "Gab", type: "Survivor", health: 7, stamina: 100 },
  { name: "Fanti", type: "Survivor", health: 4, stamina: 100 },
  { name: "\"You\"", type: "Survivor", health: 4, stamina: 100 },
];

const items = cards.map(card => `<li>${card.name}</li>`).join("");


app.get("/", (req, res) => {
    res.send(`<h1> Welcom ot my cool uhh i forgot </h1><p>rn thers ${cards.length} cards</p>`);
});

app.get("/about", (req, res) => {
  res.send("<p>they call me doe way i'm making that doe</p><p>no they don't i'm actually called gabriel bruh</p>");
});

app.get("/cards", (req, res) => {
   res.send(items);
});

app.get("/now", (req, res) => {
   const now = new Date().toLocaleString("pt-PT");
   res.send("rn its uhhhhhh " + now)
});

app.get("/cards/random", (req, res) => {
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.send("rnandom card: " + card.name + " " + card.type + " " +  card.health + " " +  card.stamina)
});



app.use((req, res) => {
  res.status(404).send("<h1><p>Oops! 404!</p></h1> <h2><p>Oh no! Something went wrong!</p></h2> <h2><p>I don't know where you tried to go,</p></h2> <h2><p>As I am only here to show</p></h2> <h2><p>The wrong address, the wrong address song!</p></h2>")
});

app.listen(3000, () => console.log("http://localhost:3000"));