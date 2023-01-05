export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    msgError: document.querySelector('.alertErro'),
    IMCresult: document.querySelector('span'),

    open() {
        this.wrapper.classList.add('open');
    },
    close() {
        this.wrapper.classList.remove('open');

    }
}