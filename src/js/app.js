import { getCurrentWeather } from './weather-api';
import Notiflix from 'notiflix';

getCurrentWeather()
  .then(console.log)
  .catch(error => {
    console.log(error.message);
    // Notiflix.Notify.failure(
    //   'Oops! Something went wrong! Try reloading the page!'
    // );
    if (error.message === '401') {
        Notiflix.Notify.info('authorized!!!!')
    }
    if (error.message === '404') {
        Notiflix.Notify.warning('Bad request!!!!')
    }
  });
