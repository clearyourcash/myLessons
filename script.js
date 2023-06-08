try {
  const body = document.querySelector('body')

  document.addEventListener('click', () => {
    e.preventDefault()
    console.log('click');
  });
} catch (error) {
  console.error(error);
}