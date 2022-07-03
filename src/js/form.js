import * as yup from 'yup';

const refs = {
  form: document.querySelector('#form'),
  formOne: document.querySelector('.form'),
  next: document.querySelector('.next'),
  evaporator: document.getElementsByName('evaporator'),
};

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

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', onChange);
refs.next.addEventListener('click', next);

// let schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup.number().required().positive().integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function () {
//     return new Date();
//   }),
// });

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

async function onSubmit() {
  event.preventDefault();
  const {
    equipment: { gasifier, capacity, cylinder, otherEquipment },
  } = dataForm;

  // перевірка поля (Виберіть тип обладання)
  // if (!gasifier && !capacity && !cylinder && otherEquipment === '') {
  //   alert('erroe');
  //   return;
  // }
  console.log('все погано');
  let schema = yup.object().shape({
    company: yup.string().required(),
  });
}

function next() {
  console.log(dataForm);
}
