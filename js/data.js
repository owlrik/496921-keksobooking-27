import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, padNumber} from './util.js';

const OFFER_TITLES = [
  'Добро пожаловать в Пьяную Бухту!',
  'Уютный guesthouse "У Бобра"',
  '"Юрта-Лакшери" для цифровых кочевников',
  'Шкаф Бендера - только для роботов',
  'Просторные жилые капсулы. Корейский дизайн и никаких паразитов'
];
const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const OFFER_CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];
const OFFER_CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];
const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const OFFER_DESCRIPTIONS = [
  'Тепло, светло и мухи не кусают',
  'Нехорошая квартира',
  'У нас есть Тайная комната и Волшебный шкаф!',
  'С собой можно взять кошку, сову, крысу или жабу',
  'Уважаемые гости, просьба соблюдать тишину!'
];
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const OFFER_COUNT = 10;

const createOfferDescription = () => {
  const location = {
    lat: getRandomPositiveFloat(35.65, 35.7, 5),
    lng: getRandomPositiveFloat(139.7, 139.8, 5)
  };

  return {
    title: getRandomArrayElement(OFFER_TITLES),
    address: `${location.lat}, ${location.lng}`,
    price: getRandomPositiveInteger(100, 5000),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getRandomPositiveInteger(1, 5),
    guests: getRandomPositiveInteger(1, 8),
    checkin: getRandomArrayElement(OFFER_CHECKINS),
    checkout: getRandomArrayElement(OFFER_CHECKOUTS),
    features: Array.from({length: getRandomPositiveInteger(1, OFFER_FEATURES.length)}, (_item, index) => OFFER_FEATURES[index]),
    description: getRandomArrayElement(OFFER_DESCRIPTIONS),
    photos: Array.from({length: getRandomPositiveInteger(1, OFFER_PHOTOS.length)}, (_item, index) => OFFER_PHOTOS[index]),
    location
  };
};

const createOffer = (index) => ({
  author: {
    avatar: `img/avatars/user${padNumber(index, OFFER_COUNT.toString().length)}.png`
  },
  offer: createOfferDescription()
});

const getOffers = () => Array.from({length: OFFER_COUNT}, (_item, index) => createOffer(index + 1));

export {getOffers};
