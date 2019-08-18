'using strict';

const loadCountriesButton = document.getElementById('btn-load-countries');
const countriesSelectList = document.getElementById('select-countries');
const countryCardDiv = document.getElementById('country-card');
const flagDiv = document.getElementById('country-flag');
const titleDiv = document.getElementById('country-title');
const infoDiv = document.getElementById('country-info');
const loadingSpan = document.getElementById('loading');

let countries = [];

function populateSelectList() {
  countries.forEach((country) => {
    const option = document.createElement('option');
    option.text = country.name;
    option.value = country.name;

    countriesSelectList.appendChild(option);
  });
  loadCountriesButton.setAttribute('disabled', '');
  countriesSelectList.style.display = 'inline';
}

function showLoading(loading) {
  loadingSpan.style.display = loading ? 'inline' : 'none';
}

function getCountries() {
  showLoading(true);
  fetch('https://restcountries.eu/rest/v2/all')
    .then((result) => result.json())
    .then((data) => {
      countries = data;
      populateSelectList();
      showLoading(false);
    })
    .catch((error) => {
      // handle error
      // eslint-disable-next-line no-console
      console.error(`Error trying to get countries: ${error}`);
      showLoading(false);
    });
}

function selectCountry() {
  const selectedCountryName = countriesSelectList.value;
  const country = countries.find((c) => c.name === selectedCountryName);

  flagDiv.innerHTML = '';
  titleDiv.innerHTML = '';

  const img = document.createElement('img');
  img.src = country.flag;
  flagDiv.appendChild(img);

  const borderingCountries = country.borders.map((borderCode) => countries.find((c) => c.alpha3Code === borderCode).name).join(', ');

  titleDiv.innerHTML = country.name;
  infoDiv.innerHTML = `Its bordering countries are ${borderingCountries}`;

  countryCardDiv.style.display = 'block';
}

loadCountriesButton.onclick = () => getCountries();
countriesSelectList.onchange = () => selectCountry();
