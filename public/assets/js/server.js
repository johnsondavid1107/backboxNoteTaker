const express = require("express");
const path = require("path");
const app = express();


const PORT = 1111;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public/'))


app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "../../","index.html"));
    console.log("knocking on the Home door!")
    console.log(__dirname);
})



app.listen(PORT, function(){
    console.log("Homework Server Open!");
})