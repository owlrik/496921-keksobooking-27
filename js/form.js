const adFormElement = document.querySelector('.ad-form');

const turnAdFormOff = () => {
  adFormElement.classList.add('ad-form--disabled');
  const fieldsets = adFormElement.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const turnAdFormOn = () => {
  adFormElement.classList.remove('ad-form--disabled');
  const fieldsets = adFormElement.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export {turnAdFormOff, turnAdFormOn};
