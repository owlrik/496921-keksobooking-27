const mapContainer = document.querySelector('.map__canvas');
const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offerDictionary = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const renderDescription = (cardElement, description) => {
  const descriptionElement = cardElement.querySelector('.popup__description');
  if (description && description.length) {
    descriptionElement.textContent = description;
  } else {
    descriptionElement.remove();
  }
};

const renderFeatures = (cardElement, features) => {
  const featuresList = cardElement.querySelector('.popup__features');
  const featureItems = featuresList.querySelectorAll('.popup__feature');
  if (features && features.length) {
    featureItems.forEach((featureItem) => {
      const hasFeature = features.some((feature) => featureItem.classList.contains(`popup__feature--${feature}`));
      if (!hasFeature) {
        featureItem.remove();
      }
    });
  } else {
    featuresList.remove();
  }
};

const createPhoto = (photo, title) => {
  const photoElement = document.createElement('img');
  photoElement.classList.add('popup__photo');
  photoElement.src = photo;
  photoElement.alt = title;
  photoElement.width = 45;
  photoElement.height = 40;
  return photoElement;
};

const renderPhotos = (cardElement, photos, title) => {
  const photoList = cardElement.querySelector('.popup__photos');
  if (photos && photos.length) {
    photoList.innerHTML = '';
    photos.forEach((photo) => {
      const photoElement = createPhoto(photo, title);
      photoList.append(photoElement);
    });
  } else {
    photoList.remove();
  }
};

const createCardElement = ({author, offer}) => {
  const cardElement = offerTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('[data-price]').textContent = offer.price;
  cardElement.querySelector('.popup__type').textContent = offerDictionary[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  renderDescription(cardElement, offer.description);
  renderFeatures(cardElement, offer.features);
  renderPhotos(cardElement, offer.photos, offer.title);
  return cardElement;
};

const renderCards = (offers) => {
  const fragment = document.createDocumentFragment();
  const cardElement = createCardElement(offers[0]);
  fragment.append(cardElement);
  mapContainer.append(fragment);
};

export {renderCards};
