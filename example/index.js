import SimpleModal from '../src/index';

var message = '<div><h4>Where have all the wild things gone?</h4><div id="again">TRY AGAIN</div></div>';

document.getElementById('anchor').onclick = function(event){
    event.preventDefault();
    SimpleModal().open(message);
    document.getElementById('again').onclick = function(event) {
        event.preventDefault();
        SimpleModal().open('<h4>AGAIN, SERIOUSLY?</h4>');
    }
}
