/* Modal
 * Author: Hart Liddell (Nov 2015)
 * Does: Opens/closes a simple modal.
 */

function close() {
    // Unbind Esc key event, because we don't want
    // to leave that sort thing lying around
    $(document).off('keyup', bindEscKeyToClose);
    var modal = document.getElementById('tm-modal');
    modal.remove();
}

function open(htmlContent) {
    // IF there is a modal open replace its contents,
    // ELSE create a new modal
    var $modal = $('.tm-modal');
    if ($modal.length > 0) {
        $modal.find('.tm-modal__content__inner').html(htmlContent);
    } else {

        $('body').append(createModalHtml(htmlContent));
        $('.tm-modal').animate({
            opacity: 1
        }, 50, function() {

            // Click modal background to close
            $(this).on('click', function(event) {
                if (event.target === event.currentTarget) {
                    close();
                }
            });
        });

        $(document).on('keyup', bindEscKeyToClose);
        $('.tm-modal__close').on('click', close);
    }
}

// Basic HTML wrapper for modal
function createModalHtml(htmlContent) {
    var html = '<div id="tm-modal" class="tm-modal">';
        html += '<div class="tm-modal__content">';
        html += '<div class="tm-modal__content__inner">' + htmlContent + '</div>';
        html += '<button title="Close (Esc)" type="button" class="tm-modal__close">×</button>';
        html += '</div>';
        html += '</div>';

    return html;
}

function bindEscKeyToClose(event) {
    // Close modal with Esc key
    if (event.keyCode == 27) {
        close();
    }
}

module.exports = {
    close: close,
    open: open
}
