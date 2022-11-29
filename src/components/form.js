export class Form {
    constructor(input, checkbox, subButton) {
        this.input = input;
        this.checkbox = checkbox;
        this.subButton = subButton;
    }

    _checkValidity() {
        return this.input.value !== '' ? /[a-zA-Z0-9.+-_]+@[a-zA-Z0-9]+\.[a-z]{2,6}\b/.test(this.input.value) : false
    }

    _checkAgreementState() {
        return this.checkbox.checked
    }

    changeButtonState() {
        this._checkValidity() && this._checkAgreementState() ? this.subButton.removeAttribute('disabled') : this.subButton.setAttribute('disabled', 'disabled')

    }
}