const ALL_COUNTRIES_ENDPOINT = 'https://restcountries.eu/rest/v2/all';

class CountryRepository {
    countries = [];

    loadAllCountries() {
        return fetch(ALL_COUNTRIES_ENDPOINT)
            .then(r => r.json())
            .then((countries) => {
                this.countries = countries.map((country) => {
                    return new Country(country.name, country.alpha3Code, 
                        country.flag, country.population, country.borders);
                });

                return this.countries;
            });
    }

    get countries() { return this.countries; }

    getCountryByName = (name) => this.countries.find(c => c.name === name);
}