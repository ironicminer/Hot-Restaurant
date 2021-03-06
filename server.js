const express = require("express");

const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let customer = [
  {
    routeName: "customer",
    name: "",
    phoneNumber: "",
    email: "",
    uniqueID: "",
  },
];

//App routes

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "reservationForm.html"));
});
app.get("/waiting", function (req, res) {
  console.log(path.join(__dirname, "viewTables.html"));
  res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/api/customer", function (req, res) {
  return res.json(customer);
});

app.post("/api/customer", function (req, res) {
  let newCustomer = req.body;

  console.log(newCustomer);

  res.json(newCustomer);
});

// Start Server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("http://localhost:" + PORT);
});
