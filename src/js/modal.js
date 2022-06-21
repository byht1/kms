(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-two]'),
    closeModalBtn: document.querySelector('[data-close-modal-two]'),
    backdrop: document.querySelector('[data-backdrop-two]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('is-hidden');
  }

  function logBackdropClick() {
    console.log('Это клик в бекдроп');
  }
})();
