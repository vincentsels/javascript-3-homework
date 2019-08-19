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

function disableElement(element, disable = true) {
  element.disabled = disable;
}

function showElement(element, show = true) {
  element.hidden = !show;
}

function clearElement(element) {
  element.innerHTML = '';
}

function addOptionToCountrySelectList(text) {
  const option = document.createElement('option');
  option.text = text;
  option.value = text;
  countriesSelectList.appendChild(option);
}

function populateSelectList() {
  addOptionToCountrySelectList(SELECT_COUNTRY_TEXT);

  countries.forEach(country => addOptionToCountrySelectList(country.name));

  disableElement(loadCountriesButton)
  showElement(countriesSelectList);
}

function showLoadingIndicator(loading) {
  showElement(loadingSpan, loading);
}

function setError(errorDetail) {
  showElement(errorDialog, errorDetail);
  errorDialog.innerText = 'An error occurred: ' + errorDetail;
}

function getCountries() {
  showLoadingIndicator(true);
  setError(null);

  fetch(ALL_COUNTRIES_ENDPOINT)
    .then((result) => result.json())
    .then((data) => {
      countries = data;
      populateSelectList();
    })
    .catch((error) => {
      setError(error);
    })
    .finally(() => showLoadingIndicator(false));
}

function setCountryName(country) {
  titleDiv.innerHTML = country.name;
}

function setCountryFlag(country) {
  clearElement(flagDiv);
  
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
    showElement(countryCardDiv, false);
    return;
  }

  const selectedCountryName = countriesSelectList.value;
  const country = countries.find((c) => c.name === selectedCountryName);
  
  setCountryFlag(country);
  setCountryName(country);
  setCountryInfo(country);
  
  showElement(countryCardDiv);
}
  
loadCountriesButton.onclick = getCountries;
countriesSelectList.onchange = selectCountry;
    