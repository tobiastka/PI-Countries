export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const GET_COUNTRIES_WITH_FILTERS = "GET_COUNTRIES_WITH_FILTERS";

export async function getAllCountries(dispatch) {
    const countriesApiRequest = await fetch("http://localhost:3001/countries");
    const countries = await countriesApiRequest.json();

    return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: countries
    });
}

export async function getCountryByName(dispatch, name) {
    const countryApiRequest = await fetch(`http://localhost:3001/countries/${name}`);
    const country = await countryApiRequest.json();

    return dispatch({
        type: GET_COUNTRY_BY_NAME,
        payload: country
    });
}

export async function postTouristActivity(dispatch, body) {
    const touristActivityPost = await fetch("http://localhost:3001/activities", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    const response = await touristActivityPost.json();
    await getAllCountries(dispatch);
    return response;
}

export async function getCountryByID(dispatch, ID) {
    const countryApiRequest = await fetch(`http://localhost:3001/countries/${ID}`);
    const country = await countryApiRequest.json();
    return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: country
    })
}


export function getCountriesWithFilters(filters) {
    return {
        type: GET_COUNTRIES_WITH_FILTERS,
        payload: filters
    };
}