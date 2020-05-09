const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

//Se indica el directorio dodne estaran las plantillas a reutilizar
hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello world');

    res.render('home', {
        nombre: 'Ruben'
    });
});

app.get('/about', (req, res) => {
    //res.send('Hello world');

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});