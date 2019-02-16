const express = require('express');
const app = express();
const port = 3000;

const path = require("path");

// let reservations = [
//     {routeName: "reservations",

//     }
// ];
// let waitlist = [
//     {routeName: "waitlist",
//     }
// ];

// Constructor to make the customer

function Customer(cName, cPhone, cEmail, cId) {
  this.cName = cName;
  this.cPhone = cPhone;
  this.cEmail = cEmail;
  this.cId = cId;
}
// Post = Create
// Put = Update

app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/html/index.html")));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + "/html/index.html")));
app.get('/reservation/make', (req, res) => res.sendFile(path.join(__dirname + "/html/reserve.html")));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + "/html/iew.html")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static("html"));

// Creates a reservation
app.post("/reserve", function (req, res) {
  console.log("====",req.body);
  let cName = req.body.name;
  let cPhone = req.body.phone - number;
  let cEmail = req.body.exampleEmailInput;
  let cId = req.body.unique - id;
  let customer = new Customer(cName, cPhone, cEmail, cId);
  return res.json(customer);
});

// // Displays all reservations
// app.get("/api/reservations", function(req, res) {
//     return res.json(reservations);
//   });

// app.get("/api/waitlist", function(req, res) {
// return res.json(waitlist);
// });