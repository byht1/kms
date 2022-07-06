const element = document.querySelectorAll('.js-gaz-list__elements');
const photo = document.querySelectorAll('.js-prodults-photo');

element[0].addEventListener('mouseover', () => {
  for (let i = 0; i < photo.length; i += 1) {
    if (photo[i].classList.contains('is-open')) {
      photo[i].classList.remove('is-open');
    }
    if (i !== 0) {
      photo[i].classList.add('is-open');
    }
  }
});
element[1].addEventListener('mouseover', () => {
  for (let i = 0; i < photo.length; i += 1) {
    if (photo[i].classList.contains('is-open')) {
      photo[i].classList.remove('is-open');
    }
    if (i !== 1) {
      photo[i].classList.add('is-open');
    }
  }
});
element[2].addEventListener('mouseover', () => {
  for (let i = 0; i < photo.length; i += 1) {
    if (photo[i].classList.contains('is-open')) {
      photo[i].classList.remove('is-open');
    }
    if (i !== 2) {
      photo[i].classList.add('is-open');
    }
  }
});
element[3].addEventListener('mouseover', () => {
  for (let i = 0; i < photo.length; i += 1) {
    if (photo[i].classList.contains('is-open')) {
      photo[i].classList.remove('is-open');
    }
    if (i !== 3) {
      photo[i].classList.add('is-open');
    }
  }
});
element[4].addEventListener('mouseover', () => {
  for (let i = 0; i < photo.length; i += 1) {
    if (photo[i].classList.contains('is-open')) {
      photo[i].classList.remove('is-open');
    }
    if (i !== 4) {
      photo[i].classList.add('is-open');
    }
  }
});

// При зникнені ховера

// element[0].addEventListener('mouseout', () => {
//   photo.classList.remove('is-open');
// });
