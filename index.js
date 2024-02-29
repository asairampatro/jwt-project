const database = require('./config/database');
const express = require('express');
const user = require('./user');
const app = express()
app.use(express.json())
app.use('/user', user)



app.listen(8080, () => {
    console.log(`Now listening on port 8080`);
});