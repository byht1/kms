(() => {
  const refs = {
    // description: document.querySelector('.description'),
    parameters: document.querySelector('.parameters'),
    text1: document.querySelector('.text-description'),
    text2: document.querySelector('.text-parameters'),
  };

  //   refs.description.addEventListener('click', click);
  refs.parameters.addEventListener('click', click);

  function click() {
    refs.text1.classList.toggle('visually-hidden');
    refs.text2.classList.toggle('visually-hidden');
  }
})();
