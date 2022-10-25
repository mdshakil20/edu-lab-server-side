const express = require('express');
const app = express();
const cors = require('cors');
const port = 6000;

const categories =  require('./courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running........ ');
});


app.listen(port, () =>{
    console.log('Server running ')
})