/* Modal
 * Author: Hart Liddell <hart@leapingfish.io>
 * Purpose: Open/close a simple modal
 */
import './simple-modal-es6.scss';
import { addEvent, removeEvent } from './helpers';

const createModalHtml = function(htmlContent) {
    let html = '<div class="smpl-modal__content">';
        html += '<div class="smpl-modal__content__inner">' + htmlContent + '</div>';
        html += '<button title="Close (Esc)" type="button" class="smpl-modal__close">×</button>';
        html += '</div>';

    const domNode = document.createElement('div');
    domNode.id = 'smpl-modal';
    domNode.innerHTML = html;
    return domNode;
}

const bindEscKeyToClose = function(event) {
    if (event.keyCode == 27) {
        this.close();
    }
}

const attachEventListeners = function(obj) {

    // Close modal with Esc key
    addEvent(document, 'keyup', bindEscKeyToClose.bind(obj));

    // Close modal with close button
    addEvent(obj.state.closeBtn, 'click', () => {
        obj.close();
    });

    // Close modal by clicking on overlay background
    addEvent(obj.state.modal, 'click', (event) => {
        if (event.target.id === 'smpl-modal') {
            obj.close();
        }
    });
}

const closeModal = function() {

    // Unbind Esc key event, because we don't want
    // to leave that sort thing lying around
    removeEvent(document, 'keyup', bindEscKeyToClose);

    // Call modal obj remove function
    this.state.modal.remove();
}

const openModal = function(htmlContent) {
    
    // IF there is a modal open replace its contents,
    // ELSE create a new modal
    if (document.getElementById('smpl-modal')) {
        document.getElementById('smpl-modal')
            .getElementsByClassName('smpl-modal__content__inner')[0]
            .innerHTML = htmlContent;
    } else {

        document.body.appendChild(createModalHtml(htmlContent));
        this.state.modal = document.getElementById('smpl-modal');
        this.state.closeBtn = this.state.modal.getElementsByClassName('smpl-modal__close')[0];
        attachEventListeners(this);
    }
}

export default function() {
    return ({
        state: {},
        close: closeModal,
        open: openModal
    });
};
