// Object's key is input, object's value is the output of program.
let cache = {
  1: 1,
  2: 2,
  3: 6,
};

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return number;
  }
  return number * factorial(number - 1);
};

document.getElementById('calc-btn').addEventListener('click', () => {
  const inputNumber = document.getElementById('fac-input').value;
  const resultLabel = document.getElementById('result-label');

  if (cache[inputNumber]) {
    resultLabel.textContent = `Result from cache = ${cache[inputNumber]}`;
    resultLabel.style.display = 'block';
  } else {
    const calculatedValue = factorial(+inputNumber);
    cache[inputNumber] = calculatedValue;
    resultLabel.textContent = `Calculated result (stored at cache) = ${calculatedValue}`;
    resultLabel.style.display = 'block';
  }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('fac-input').value = '';
  document.getElementById('result-label').textContent = '';
  document.getElementById('result-label').style.display = 'none';
});

document.getElementById('clear-cache-btn').addEventListener('click', () => {
  cache = {};
});
