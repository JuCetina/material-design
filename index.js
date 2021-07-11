
mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

const textFields = document.querySelectorAll('.mdc-text-field');
console.log(textFields);

for (let textField of textFields){
    mdc.textField.MDCTextField.attachTo(textField);
}