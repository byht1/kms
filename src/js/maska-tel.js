const elements = document.getElementsByClassName('form-label__input-tel');

var im = new Inputmask('+38 (099) 9999999');
im.mask(elements);
