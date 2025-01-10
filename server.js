const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/html/home.html'))
})

app.listen(port, () => {
    console.log("Server is Running");
})

module.exports = app;