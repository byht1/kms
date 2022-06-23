let x = 0;

if (x === 0) {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    header.classList.add('sticky', window.scrollY > 0);
  });
  x += 1;
}

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
};

setTimeout(() => {
  window.scrollTo(0, 1);
}, 1000);
