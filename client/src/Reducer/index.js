import { GET_ALL_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_WITH_FILTERS, GET_COUNTRY_BY_ID } from "../Actions";

export default function reducer(state = {
    countries: [],
    country: {},
    filteredCountries: []
}, action) {

    switch (action.type) {

        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                country: action.payload
            }

        case GET_COUNTRIES_WITH_FILTERS:

            let filteredsCountries = [...state.countries];
            if (action.payload.name) {
                filteredsCountries = filteredsCountries.filter(country => country.name.toLowerCase().includes(action.payload.name));
            }

            if (action.payload.continent) {
                filteredsCountries = action.payload.continent === "Continent" ? filteredsCountries : filteredsCountries.filter(country => country.continent.includes(action.payload.continent));
            }

            if (action.payload.radio === "AZ") {
                filteredsCountries = filteredsCountries.sort((a, b) => a.name.localeCompare(b.name));
            }
            else if (action.payload.radio === "ZA") {
                filteredsCountries = filteredsCountries.sort((a, b) => b.name.localeCompare(a.name));
            }
            else if (action.payload.radio === "ASC") {
                filteredsCountries = filteredsCountries.sort((a, b) => { return (a.population - b.population) });
            }
            else if (action.payload.radio === "DES") {
                filteredsCountries = filteredsCountries.sort((a, b) => { return (b.population - a.population) });
            }

            if (action.payload.activity) {
                filteredsCountries = action.payload.activity === "Activity" ? filteredsCountries : filteredsCountries.filter(country => JSON.stringify(country.touristActivities).includes(`"name":"${action.payload.activity}"`));

            }

            return {
                ...state,
                filteredCountries: filteredsCountries
            }

        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload[0]
            }
        default:
            return { ...state };
    }
}


