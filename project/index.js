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

function showError(errorDetail) {
  errorDialog.style.display = errorDetail ? 'block': 'none';
  errorDialog.innerText = 'An error occurred: ' + errorDetail;
}

function getCountries() {
  showLoading(true);
  showError(null);
  fetch(ALL_COUNTRIES_ENDPOINT)
    .then((result) => result.json())
    .then((data) => {
      countries = data;
      populateSelectList();
      showLoading(false);
    })
    .catch((error) => {
      showError(error);
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
  
  // Translate the bordering countries' codes into their actual names
  const borderingCountries = country.borders.map(
    borderCode => countries.find(c => c.alpha3Code === borderCode).name).join(', ');

  const borderingCountriesText = borderingCountries
    ? `Its bordering countries are ${borderingCountries}.`
    : 'It has no bordering countries.';
  
  const capitalText = country.capital
    ? `Its capital is ${country.capital}.`
    : 'It has no capital.';
  
  titleDiv.innerHTML = country.name;
  infoDiv.innerHTML =  `${capitalText} ${borderingCountriesText}`;
  
  countryCardDiv.style.display = 'block';
}
  
loadCountriesButton.onclick = () => getCountries();
countriesSelectList.onchange = () => selectCountry();
    