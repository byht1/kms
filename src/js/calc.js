const refs = {
  form: document.querySelector('#form'),
  reset: document.querySelector('.reset'),
  //   Розрахункові данні
  costs: document.querySelector('.costs'),
  ballons: document.querySelector('.ballons'),
  c175: document.querySelector('.c175'),
  c210: document.querySelector('.c210'),
  c500: document.querySelector('.c500'),
  liquid: document.querySelector('.liquid'),
  liquid5: document.querySelector('.liquid5'),
  liquid5Box: document.querySelector('#liquid-dox'),
  diameter: document.querySelector('.diameter'),
  // mobail
  costsTwo: document.querySelector('.costs-two'),
  ballonsTwo: document.querySelector('.ballons-two'),
  c175Two: document.querySelector('.c175-two'),
  c210Two: document.querySelector('.c210-two'),
  c500Two: document.querySelector('.c500-two'),
  liquidTwo: document.querySelector('.liquid-two'),
  liquid5Two: document.querySelector('.liquid5-two'),
  liquid5BoxTwo: document.querySelector('#liquid-dox-two'),
  diameterTwo: document.querySelector('.diameter-two'),
};
const {
  form,
  reset,
  costs,
  ballons,
  c175,
  c210,
  c500,
  liquid,
  liquid5,
  liquid5Box,
  diameter,
  costsTwo,
  ballonsTwo,
  c175Two,
  c210Two,
  c500Two,
  liquidTwo,
  liquid5Two,
  liquid5BoxTwo,
  diameterTwo,
} = refs;

const data = {
  // Витрати
  // Балони
  // 175л
  // 210л
  // 500л
  // Рідкий кисень
  // Рідкий кисень на 5 днів
  // Діаметер труби
  costs: null,
  ballons: null,
  c175: null,
  c210: null,
  c500: null,
  liquid: null,
  liquid5: null,
  diameter: null,
};

form.addEventListener('submit', submit);
reset.addEventListener('click', () => {
  form.reset();
  tableTextReset();
});

function submit() {
  event.preventDefault();
  const {
    elements: { existing, design, devicesSvl, volume, cof },
  } = event.currentTarget;
  const tottalPoint =
    Number(existing.value) + Number(design.value) + Number(devicesSvl.value);
  dataКecording('tottalPoint', tottalPoint);
  dataКecording(volume.name, volume.value);
  dataКecording(cof.name, cof.value);
  calc();
  liquid5Box.classList.remove('visually-hidden');
  tableText();
}

function dataКecording(name, value) {
  if (name === 'cof' && !value) {
    calcCof();
    return;
  }

  if (name === 'cof' && value > 1) {
    value = 1;
  }

  if (name === 'cof' && value < 0.7) {
    value = 0.7;
  }
  console.log('🚀 ~ value', value);
  data[name] = Number(value);
}

function calcCof() {
  const { tottalPoint } = data;

  if (tottalPoint <= 50) {
    data['cof'] = 0.9;
    return;
  }

  if (tottalPoint > 50 && tottalPoint <= 100) {
    data['cof'] = 0.85;
    return;
  }

  if (tottalPoint > 100 && tottalPoint <= 150) {
    data['cof'] = 0.8;
    return;
  }

  if (tottalPoint > 150 && tottalPoint <= 200) {
    data['cof'] = 0.75;
    return;
  }

  data['cof'] = 0.7;
  return;
}

function calc() {
  const { tottalPoint, volume, cof } = data;
  const oneT = 0.72;
  const spid = 10;
  const costs = (tottalPoint * volume * cof * 0.06 * 24).toFixed(2);
  data.costs = costs;
  data.ballons = (Number(costs) / 6.36).toFixed(2);
  data.c175 = (Number(costs) / (175 * 0.76)).toFixed(2);
  data.c210 = (Number(costs) / (210 * 0.76)).toFixed(2);
  data.c500 = (Number(costs) / (500 * 0.76)).toFixed(2);
  data.liquid = (Number(costs) / 751.8).toFixed(2);
  data.liquid5 = ((Number(costs) / 751.8) * 5).toFixed(2);
  data.diameter = (18.8 * Math.sqrt((oneT * tottalPoint) / spid)).toFixed(2);
}

function tableText() {
  costs.textContent = `${data.costs}`;
  ballons.textContent = `${data.ballons}`;
  c175.textContent = `${data.c175}`;
  c210.textContent = `${data.c210}`;
  c500.textContent = `${data.c500}`;
  liquid.textContent = `${data.liquid}`;
  liquid5.textContent = `${data.liquid5}`;
  diameter.textContent = `${data.diameter}`;

  costsTwo.textContent = `${data.costs}`;
  ballonsTwo.textContent = `${data.ballons}`;
  c175Two.textContent = `${data.c175}`;
  c210Two.textContent = `${data.c210}`;
  c500Two.textContent = `${data.c500}`;
  liquidTwo.textContent = `${data.liquid}`;
  diameterTwo.textContent = `${data.diameter}`;
}

function tableTextReset() {
  costs.textContent = '';
  ballons.textContent = '';
  c175.textContent = '';
  c210.textContent = '';
  c500.textContent = '';
  liquid.textContent = '';
  liquid5.textContent = '';
  diameter.textContent = '';

  costsTwo.textContent = '';
  ballonsTwo.textContent = '';
  c175Two.textContent = '';
  c210Two.textContent = '';
  c500Two.textContent = '';
  liquidTwo.textContent = '';
  liquid5Two.textContent = '';
  diameterTwo.textContent = '';
  liquid5Box.classList.add('visually-hidden');
}
