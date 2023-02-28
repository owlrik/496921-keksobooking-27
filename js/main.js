const getRandomInt = (min = 0, max = 1000) => {
  if (min < 0 || max <= min) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (min, max, digits) => {
  if (min < 0 || max <= min) {
    return NaN;
  }

  return +(Math.random() * (max - min) + min).toFixed(digits);
};

getRandomInt(1, 10);
getRandomFloat(1, 10, 3);
