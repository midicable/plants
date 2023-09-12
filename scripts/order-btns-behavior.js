document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('contacts').scrollIntoView();
  });
})