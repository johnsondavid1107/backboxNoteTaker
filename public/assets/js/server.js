const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();


const PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'../../')))


app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "../../","index.html"));  
    console.log("WTF!")
})

app.get("/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "../../","notes.html"));
    console.log("knocking on the NOTES door!")
    
})

app.get("/api/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "../../../db","db.json"));
    console.log("Got the JSON")
    
})

app.post("/api/notes", function (req, res) {

    let note = req.body
    console.log(note)
    fs.appendFile("../../../db/db.json", note);
    
})

app.listen(PORT, function(){
    console.log("Homework Server Open!");
})