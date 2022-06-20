const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function () {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
};
window.scrollTo(0, 1);
