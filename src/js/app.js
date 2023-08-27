import { getCurrentWeather } from './weather-api';
import Notiflix from 'notiflix';
import { elements } from './refs';
import { createMarkup } from './createMarkup';

const { formEl, container, loader } = elements;

formEl.addEventListener('submit', onFormSubmitHandler);

function onFormSubmitHandler(e) {
  e.preventDefault();
  loader.classList.remove('is-hidden');
  const query = e.currentTarget.elements.user_country.value.trim();
  setTimeout(() => {
    getCurrentWeather(query)
      .then(response => response.data)
      .then(data => {
        container.innerHTML = createMarkup(data);
      })
      .catch(error => {
        if (error.response.status === 401) {
          Notiflix.Notify.info('authorized!!!!');
        }
        if (error.response.status === 404) {
          Notiflix.Notify.warning('Bad request!!!!');
        }
      })
      .finally(() => {
        loader.classList.add('is-hidden');
      });
  }, 1000);
}

// getCurrentWeather()
//   .then(response => {
//     return response.data;
//   })
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error);
//     // Notiflix.Notify.failure(
//     //   'Oops! Something went wrong! Try reloading the page!'
//     // );

//     if (error.response.status === 401) {
//       Notiflix.Notify.info('authorized!!!!');
//     }
//     if (error.response.status === 404) {
//       Notiflix.Notify.warning('Bad request!!!!');
//     }
//   });
