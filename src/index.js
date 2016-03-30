/* Modal
 * Author: Hart Liddell (Mar 2016)
 * Purpose: Open/close a simple modal
 */
import './index.scss';
import { addEvent, removeEvent } from './helpers';

const createModalHtml = function(htmlContent) {
    let html = '<div class="tm-modal__content">';
        html += '<div class="tm-modal__content__inner">' + htmlContent + '</div>';
        html += '<button title="Close (Esc)" type="button" class="tm-modal__close">×</button>';
        html += '</div>';

    const domNode = document.createElement('div');
    domNode.id = 'tm-modal';
    domNode.innerHTML = html;
    return domNode;
}

const bindEscKeyToClose = function(event) {
    if (event.keyCode == 27) {
        this.close();
    }
}

const closeModal = function() {
    // Unbind Esc key event, because we don't want
    // to leave that sort thing lying around
    removeEvent(document, 'keyup', bindEscKeyToClose);
    this.state.modal.remove();
}

const openModal = function(htmlContent) {
    // IF there is a modal open replace its contents,
    // ELSE create a new modal
    if (document.getElementById('tm-modal')) {
        document.getElementById('tm-modal')
            .getElementsByClassName('tm-modal__content__inner')[0]
            .innerHTML = htmlContent;
    } else {

        const state = this.state;
        document.body.appendChild(createModalHtml(htmlContent));
        state.modal = document.getElementById('tm-modal');
        state.closeBtn = state.modal.getElementsByClassName('tm-modal__close')[0];

        addEvent(state.modal, 'click', (event) => {
            if (event.target.id === 'tm-modal') {
                this.close();
            }
        });

        addEvent(state.closeBtn, 'click', () => {
            this.close();
        });
        addEvent(document, 'keyup', bindEscKeyToClose.bind(this));
    }
}

export default () => {
    return ({
        state: {},
        close: closeModal,
        open: openModal
    });
};
