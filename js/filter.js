const filterElement = document.querySelector('.map__filters');

const turnFilterOff = () => {
  filterElement.classList.add('map__filters--disabled');
  for (const el of filterElement.children) {
    el.disabled = true;
  }
};

const turnFilterOn = () => {
  filterElement.classList.remove('map__filters--disabled');
  for (const el of filterElement.children) {
    el.disabled = false;
  }
};

export {turnFilterOff, turnFilterOn};
