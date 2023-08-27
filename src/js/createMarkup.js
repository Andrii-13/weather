export function createMarkup(data) {
  return `<div class="weather__card">
    <h2 class="city-name">${data.name}</h2>
    <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${data.main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${data.main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${data.sys.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${data.sys.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${data.clouds.all}%</p>
        </li>
    </ul>
</div>`;
}
