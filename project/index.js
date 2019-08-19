'using strict';

const loadCountriesButton = document.getElementById('btn-load-countries');
const countriesSelectList = document.getElementById('select-countries');
const countryCardDiv = document.getElementById('country-card');
const flagDiv = document.getElementById('country-flag');
const titleDiv = document.getElementById('country-title');
const infoDiv = document.getElementById('country-info');
const loadingSpan = document.getElementById('loading');
const errorDialog = document.getElementById('error-dialog');

const ALL_COUNTRIES_ENDPOINT = 'https://restcountries.eu/rest/v2/all';
const SELECT_COUNTRY_TEXT = 'Select a country...';

let countries = [];

function addOptionToCountrySelectList(text) {
  const option = document.createElement('option');
  option.text = text;
  option.value = text;
  countriesSelectList.appendChild(option);
}

function populateSelectList() {
  addOptionToCountrySelectList(SELECT_COUNTRY_TEXT);

  countries.forEach(country => addOptionToCountrySelectList(country.name));
  
  loadCountriesButton.setAttribute('disabled', '');
  countriesSelectList.style.display = 'inline';
}

function showLoadingIndicator(loading) {
  loadingSpan.style.display = loading ? 'inline' : 'none';
}

function showError(errorDetail) {
  errorDialog.style.display = errorDetail ? 'block': 'none';
  errorDialog.innerText = 'An error occurred: ' + errorDetail;
}

function getCountries() {
  showLoadingIndicator(true);
  showError(null);

  fetch(ALL_COUNTRIES_ENDPOINT)
    .then((result) => result.json())
    .then((data) => {
      countries = data;
      populateSelectList();
    })
    .catch((error) => {
      showError(error);
    })
    .finally(() => showLoadingIndicator(false));
}

function setCountryName(country) {
  titleDiv.innerHTML = country.name;
}

function setCountryFlag(country) {
  flagDiv.innerHTML = '';
  
  const img = document.createElement('img');
  img.src = country.flag;
  flagDiv.appendChild(img);
}

function setCountryInfo(country) {
  // Translate the bordering countries' codes into their actual names
  const borderingCountries = country.borders.map(
    borderCode => countries.find(c => c.alpha3Code === borderCode).name).join(', ');

  const borderingCountriesText = borderingCountries
    ? `Its bordering countries are ${borderingCountries}.`
    : 'It has no bordering countries.';
  
  const capitalText = country.capital
    ? `Its capital is ${country.capital}.`
    : 'It has no capital.';
  
  infoDiv.innerHTML = `${capitalText} ${borderingCountriesText}`;
}

function selectCountry() {
  if (countriesSelectList.value === SELECT_COUNTRY_TEXT) {
    countryCardDiv.style.display = 'none';
    return;
  }

  const selectedCountryName = countriesSelectList.value;
  const country = countries.find((c) => c.name === selectedCountryName);
  
  setCountryFlag(country);
  setCountryName(country);
  setCountryInfo(country);
  
  countryCardDiv.style.display = 'block';
}
  
loadCountriesButton.onclick = getCountries;
countriesSelectList.onchange = selectCountry;
    