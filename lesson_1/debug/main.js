const someFunc = () => {
  console.log('call someFunc');

  return true;
};

const main = () => {
  const a = 1;
  console.log('hi, its first step');

  const b = 2;
  console.log('hi, its first step');

  const c = 2;
  console.log('hi, its first step');

  someFunc();
};

setInterval(main, 3000);
