const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the homepage bro");
});

const port = process.emitWarning.port || 3000;
app.listen(port, () => {
    console.log("Wazzapp!!!");
});


