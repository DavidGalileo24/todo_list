const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, {})
.then((res) => {
    console.log(res)
}) .catch((e) => {
    console.log(e);
});

app.use(express.json());
app.listen(port)
