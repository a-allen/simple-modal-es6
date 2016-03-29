import SimpleModal from './simple-modal';

var message = '<h4>Where have all the wild things gone?</h4>';

document.getElementById('anchor').onclick = function(event){
    event.preventDefault();
    SimpleModal().open(message);
}
