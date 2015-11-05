var $ = require('jquery');
var succinct = require('imports?jQuery=jquery!../node_modules/succinct/jQuery.succinct.js');


function shorty() {
    $('h1').css('color', 'red');
    $('p').succinct({
        size: 66
    });
}

module.exports = {
    shorty: shorty
}
