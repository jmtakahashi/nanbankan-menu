const resetButton = document.getElementById('resetAll')
const regNums = document.getElementsByClassName('menuItem-regNum')

resetButton.addEventListener('click', (e) => {
  e.preventDefault();

  for (el of regNums) {
    el.classList.add('blur')
  };

  for (el of regNums) {
    el.addEventListener('click', (e) => handleClick(e))
  };

  function handleClick(e) {
    e.preventDefault();
    e.target.classList.toggle('blur')
  }
})



