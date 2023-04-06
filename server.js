const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api-key", (req, res) => {
    const key = {
        api_key: process.env.API_KEY,
    };
    res.status(200).send(key);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
