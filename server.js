const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var notesArray = require("./db/db.json");

var emptyArray = []
const PORT = process.env.PORT || 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))



app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "public", "index.html"));

})

app.get("/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "public", "notes.html"));
    console.log("knocking on the NOTES door!")

})

app.get("/api/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "db", "db.json"));
    // console.log("Got the JSON")

})

app.delete("/api/notes/:id", function (req, res) {
    var choice = parseInt(req.params.id)
    notesArray = notesArray.filter(function(data) {
        if (data.id !== choice) {
            return true;
        }
    })
console.log(notesArray, "line43");

    fs.writeFile("db/db.json", JSON.stringify(notesArray), (err) =>
        err ? console.error(err) : console.log("Successful"));

    res.send("Completed! SUCCESS!");

})


app.post("/api/notes", function (req, res) {

    let note = req.body
    let newID = notesArray.length
    note.id = newID


    notesArray.push(note)
    // console.log(notesArray);

    fs.writeFile("db/db.json", JSON.stringify(notesArray), (err) =>
        err ? console.error(err) : console.log("Successful"));

    res.send("Completed! SUCCESS!");


})

app.listen(PORT, function () {
    console.log("Homework Server Open!");
})