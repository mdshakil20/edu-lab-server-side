const express = require('express');
const app = express();
const cors = require('cors');
const port = 7000;

const courses =  require('./courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('API running........ ');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});


app.listen(port, () =>{
    console.log('Server running on port ', port);
})