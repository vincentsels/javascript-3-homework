class Country {
    constructor(name, code, flagUrl, population, borderingCountryCodes) {
        this.name = name;
        this.code = code;
        this.flagUrl = flagUrl;
        this.population = population;
        this.borderingCountryCodes = borderingCountryCodes;
    }

    renderAsOption() {
        const option = document.createElement('option');
        option.text = this.name;
        option.value = this.name;
        return option;
    }

    renderFlag() {
        const img = document.createElement('img');
        img.src = this.flagUrl;
        return img;
    }

    renderName() {
        return this.name;
    }

    renderInfo(countries) {
        const borderingCountries = this.borderingCountryCodes.map(
            (borderingCountryCode) => countries.find(
              (c) => c.code === borderingCountryCode).name).join(', ');
        
        const ul = document.createElement('ul');

        const liPopulation = document.createElement('li');
        liPopulation.innerText = 'Inhabitants: ' + this.population;
        ul.appendChild(liPopulation);
        
        const liBorderingCountries = createElement('li');
        liBorderingCountries.innerText = 'Bordering countries: ' + borderingCountries;
        ul.appendChild(liBorderingCountries);

        return ul;
    }
}