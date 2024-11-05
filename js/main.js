import {getOffers} from './data.js';
import {renderCards} from './card.js';
import {turnAdFormOff} from './form.js';
import {turnFilterOff} from './filter.js';

renderCards(getOffers());
turnAdFormOff();
turnFilterOff();
