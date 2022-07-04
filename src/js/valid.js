import JustValidate from 'just-validate';

export const validOne = () => {
  const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontSize: '16px',
      color: '#dc3545',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
    .addField('#company', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 30,
      },
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
      {
        rule: 'email',
        errorMessage: 'Будьласка введіть вірнеий email',
      },
    ])
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
    ])
    .addField('#position', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
    ])
    .addField('#address', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Це поле обовязкове',
      },
    ])
    .addRequiredGroup(
      '#read_terms_checkbox_group',
      'You should select at least one communication channel'
    )
    .addRequiredGroup('#communication_radio_group')
    .onSuccess(event => {
      console.log('Validation passes and form submitted', event);
    });
};
