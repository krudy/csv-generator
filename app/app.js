const express = require('express');
const { read } = require('fs');
const path = require('path');
const app = express();
const port = 9999;
const data = require('./data.json');
const { Parser } = require('json2csv');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/../views'));
app.use(express.static('public'));

//parser
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', (req, res) => {
    console.log(req.body);

    const fields = req.body.fields.map( element => ({
        label: element,
        value: element
    }))

    const dataCSV = data.map( row => {
        const r = {};
        fields.forEach( field => {
            r[field.value] = row[field.value];
        });
        return r;
    })

    console.log(dataCSV);
    

    res.redirect('back');
    
});


app.listen(port, () => {
    console.log(`listening on ${port}`);
})
