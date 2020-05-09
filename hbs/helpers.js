const hbs = require('hbs');


//helper: funcion que se dispara cuando se requiere
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});