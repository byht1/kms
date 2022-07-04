const refs = {
  form: document.querySelector('#form'),
  formOne: document.querySelector('.form'),
  formTwo: document.querySelector('.formTwo'),
  formThree: document.querySelector('.formThree'),
  btnBack: document.querySelector('.button-back'),
  btnBackTwo: document.querySelector('.button-backTwo'),
};

let x = 0;

const dataForm = {
  company: '',
  name: '',
  position: '',
  address: '',
  phone: '',
  email: '',
  equipment: {
    gasifier: false,
    capacity: false,
    cylinder: false,
    otherEquipment: '',
  },
  appointment: '',
  evaporator: false,
  min: '',
  max: '',
  volumeCylinder: '',
  volumeGasifier: '',
  pressure: '',
  additionalEquipment: '',
  location: '',
  gas: '',
  number: '',
  movable: '',
  designing: '',
  construction: '',
  assembling: '',
  oebugging: '',
  to: '',
  others: '',
};

refs.form.addEventListener('input', onChange);

refs.formOne.addEventListener('submit', onSubmitOne);
refs.formTwo.addEventListener('submit', onSubmitTwo);
refs.formThree.addEventListener('submit', onSubmitThree);
refs.btnBack.addEventListener('click', () => {
  refs.formOne.classList.remove('visually-hidden');
  refs.formTwo.classList.add('visually-hidden');
  window.scrollTo(0, 0);
});
refs.btnBackTwo.addEventListener('click', () => {
  refs.formTwo.classList.remove('visually-hidden');
  refs.formThree.classList.add('visually-hidden');
  window.scrollTo(0, 0);
});

function onChange() {
  const eve = event.target;

  if (eve.nodeName === 'INPUT' && eve.type === 'checkbox') {
    dataForm.equipment[eve.name] = eve.checked;
    return;
  }
  if (eve.name === 'otherEquipment') {
    dataForm.equipment[eve.name] = eve.value;
    return;
  }
  dataForm[`${eve.name}`] = eve.value;
}

function onSubmitOne() {
  event.preventDefault();
  refs.formOne.classList.add('visually-hidden');
  refs.formTwo.classList.remove('visually-hidden');

  window.scrollTo(0, 0);
}

function onSubmitTwo() {
  event.preventDefault();
  refs.formTwo.classList.add('visually-hidden');
  refs.formThree.classList.remove('visually-hidden');
  // window.scrollTo(0, 0);
  const {
    appointment,
    equipment: { gasifier, capacity, cylinder, otherEquipment },
  } = dataForm;
  console.log('🚀 ~ appointment', appointment);
}

function onSubmitThree() {
  event.preventDefault();
  refs.formTwo.classList.add('visually-hidden');
  refs.formThree.classList.remove('visually-hidden');
  window.scrollTo(0, 0);
  // const {
  //   equipment: { gasifier, capacity, cylinder, otherEquipment },
  // } = dataForm;

  // console.log('все погано');
}
