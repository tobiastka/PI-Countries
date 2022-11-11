import React from 'react'
import SearchBar from './SearchBar.jsx';
import CardCountry from './CardCountry';
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getAllCountries, getCountriesWithFilters } from '../Actions/index.js';
import { Link } from 'react-router-dom';

function Home() {

    const dispatch = useDispatch();
    // ESTADOS DEL STORE
    const allCountries = useSelector(state => state.countries);
    const filteredCountries = useSelector(state => state.filteredCountries);

    useEffect(() => {
        getAllCountries(dispatch)
        console.log("Todos los paises son: ", allCountries);
    }, []);

    // PAGINADO 
    const COUNTRIES_PER_PAGE = 8;
    const [CURRENT_PAGE, SET_CURRENT_PAGE] = useState(1);
    const PAGE_SETTER = (page) => {
        SET_CURRENT_PAGE(page);
    }
    let FIRST_INDEX_PAGE = CURRENT_PAGE * COUNTRIES_PER_PAGE - COUNTRIES_PER_PAGE;
    let LAST_INDEX_PAGE = CURRENT_PAGE * COUNTRIES_PER_PAGE;

    const currentCountries = allCountries.slice(FIRST_INDEX_PAGE, LAST_INDEX_PAGE);
    const currentCountriesFiltereds = filteredCountries.slice(FIRST_INDEX_PAGE, LAST_INDEX_PAGE);

    // FILTROS
    const [FILTER, SET_FILTER] = useState({
        name: "",
        continent: "",
        activity: "",
        radio: ""
    });
    const FILTER_SETTER = ({ name, continent, activity, radio }) => {
        SET_FILTER({
            name: name === "" ? "" : name ? name : FILTER.name,
            continent: continent ? continent : FILTER.continent,
            activity: activity ? activity : FILTER.activity,
            radio: radio ? radio : FILTER.radio
        });
        PAGE_SETTER(1);
    }

    useEffect(() => {
        dispatch(getCountriesWithFilters(FILTER));
        console.log("Se aplicaron los filtros: ", FILTER);
        console.log(filteredCountries);
    }, [FILTER])
    
    return (
        <div className='home-container'>
            <SearchBar className="search-bar" numberOfCountries={filteredCountries.length ? filteredCountries.length : allCountries.length} countriesPerPege={COUNTRIES_PER_PAGE} PAGE_SETTER={PAGE_SETTER}
                FILTER_SETTER={FILTER_SETTER} />
            <div className='cards-container'>
                {
                    filteredCountries.length && JSON.stringify(allCountries) !== JSON.stringify(filteredCountries)
                        ?
                        currentCountriesFiltereds?.map(country => {
                            return (
                                <Link className='country-link' to={`/home/${country.id}`}><CardCountry key={country.id} {...country} /></Link>
                            )
                        })
                        :
                        currentCountries?.map(country => {
                            return (
                                <Link className='country-link' to={`/home/${country.id}`}><CardCountry key={country.id} {...country} /></Link>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Home

/*
__Ruta principal__: debe contener

- [ ] Input de búsqueda para encontrar países por nombre
- [ ] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries` y deberá mostrar su:
  - Imagen de la bandera
  - Nombre
  - Continente
- [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.
*/