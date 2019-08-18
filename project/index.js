'using strict';

const loadCountriesButton = document.getElementById('btn-load-countries');
const countriesSelectList = document.getElementById('select-countries');
const countryCardDiv = document.getElementById('country-card');
const flagDiv = document.getElementById('country-flag');
const titleDiv = document.getElementById('country-title');
const infoDiv = document.getElementById('country-info');
const loadingSpan = document.getElementById('loading');

const countryRepository = new CountryRepository();

function populateSelectList(countries) {
  countries.forEach((country) => {
    const option = country.renderAsOption();
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
  countryRepository.loadAllCountries()
    .then((countries) => {
      populateSelectList(countries);
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
  const country = countryRepository.getCountryByName(selectedCountryName);

  flagDiv.innerHTML = '';
  titleDiv.innerHTML = '';
  
  flagDiv.innerHTML = country.renderFlag();
  titleDiv.innerHTML = country.renderName();
  infoDiv.innerHTML = country.renderInfo(countryRepository.countries);

  countryCardDiv.style.display = 'block';
}

loadCountriesButton.onclick = () => getCountries();
countriesSelectList.onchange = () => selectCountry();
