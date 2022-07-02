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
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', onChange);
refs.next.addEventListener('click', next);

function onChange() {
  const eve = event.target;
  console.log('🚀 ~ eve', eve.checked);

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
  // for (var i = 0; i < refs.evaporator.length; i++) {
  //   if (refs.evaporator.checked) {
  //     dataForm.evaporator = true;
  //     return;
  //   }
  // }

  let formData = new FormData(refs.form);
  console.log('🚀 ~ formData', formData);

  let response = await fetch('sendmail.php', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    alert('by');
  } else {
    alert('error');
  }
}

function next() {
  console.log(dataForm);
}
