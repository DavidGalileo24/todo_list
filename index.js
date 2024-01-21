const express = require('express');
const mongoose = require('mongoose');
const tasksRoutes = require('./src/routes/tasks');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL, {});

app.use(express.json());
app.use(tasksRoutes);
app.listen(port)
