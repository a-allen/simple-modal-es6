var SimpleModal = require('./simple-modal');
var MakeItShort = require('./make-it-shorter');

var message = '<h4>Where have all the wild things gone?</h4>';

document.getElementById('anchor').onclick = function(event){
    event.preventDefault();
    SimpleModal.openModal(message);
    MakeItShort.shorty();
}
