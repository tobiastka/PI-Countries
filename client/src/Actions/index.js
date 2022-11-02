export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";

export async function getAllCountries(dispatch){
    const countries = await fetch("http://localhost:3001/countries");
    const countriesJSON = await countries.json();

    return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: countriesJSON
    })
}