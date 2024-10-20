const express = require('express');
const { read } = require('fs');
const path = require('path');
const app = express();
const port = 9999;
const data = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/../views'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {

});


app.listen(port, () => {
    console.log(`listening on ${port}`);
})
