
require('dotenv').config
const express = require('express');

const app = express();

app.listen(5050, ()=> {
    console.log('app listening at port 5050');
});

app.get('/', (req, res)=> {
    res.send('online!')
});