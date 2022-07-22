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
  diameter: document.querySelector('.diameter'),
};
const { form, reset, costs, ballons, c175, c210, c500, liquid, diameter } =
  refs;

const data = {
  // Витрати
  // Балони
  // 175л
  // 210л
  // 500л
  // Рідкий кисень
  costs: null,
  ballons: null,
  c175: null,
  c210: null,
  c500: null,
  liquid: null,
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
  tableText();
}

function dataКecording(name, value) {
  if (name === 'cof' && !value) {
    calcCof();
    return;
  }
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
  data.ballons = Math.ceil(Number(costs) / 6.36).toString();
  data.c175 = Math.ceil(Number(costs) / (175 * 0.76)).toString();
  data.c210 = Math.ceil(Number(costs) / (210 * 0.76)).toString();
  data.c500 = Math.ceil(Number(costs) / (500 * 0.76)).toString();
  data.liquid = (Number(costs) / 751.8).toFixed(2);
  data.diameter = (18.8 * Math.sqrt((oneT * tottalPoint) / 10)).toFixed(2);

  console.log('🚀 ~ data.costs', data.costs);
  console.log('🚀 ~ data.ballons', data.ballons);
  console.log('🚀 ~ data.c175', data.c175);
  console.log('🚀 ~ data.c210', data.c210);
  console.log('🚀 ~ data.c500', data.c500);
  console.log('🚀 ~ data.liquid', data.liquid);
  console.log('🚀 ~ data.diameter', data.diameter);
}

function tableText() {
  costs.textContent = `${data.costs}`;
  ballons.textContent = `${data.ballons}`;
  c175.textContent = `${data.c175}`;
  c210.textContent = `${data.c210}`;
  c500.textContent = `${data.c500}`;
  liquid.textContent = `${data.liquid}`;
  diameter.textContent = `${data.diameter}`;
}

function tableTextReset() {
  costs.textContent = '';
  ballons.textContent = '';
  c175.textContent = '';
  c210.textContent = '';
  c500.textContent = '';
  liquid.textContent = '';
  diameter.textContent = '';
}
