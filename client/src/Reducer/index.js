import { GET_ALL_COUNTRIES } from "../Actions";

export default function reducer(state = {
    countries: [],
    country: {},
}, action) {

    switch (action.type) {

        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            };


        default:
            return { ...state };
    }
}


