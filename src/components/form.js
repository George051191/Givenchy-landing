export class Form {
    constructor(input, checkbox, subButton) {
        this.input = input;
        this.checkbox = checkbox;
        this.subButton = subButton;
    }

    _checkValidity() {
        return this.input.value !== '' ? this.input.validity.valid : false
    }

    _checkAgreementState() {
        return this.checkbox.checked
    }

    changeButtonState() {
        this._checkValidity() && this._checkAgreementState() ? this.subButton.removeAttribute('disabled') : this.subButton.setAttribute('disabled', 'disabled')

    }
}