const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const tasksRoutes = require('./src/routes/tasks');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL, {});
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/api', tasksRoutes);
app.listen(port)
