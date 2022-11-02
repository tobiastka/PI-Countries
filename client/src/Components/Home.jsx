import React from 'react'
import SearchBar from './SearchBar.jsx';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from '../Actions/index.js';

function Home() {
    
    const dispatch = useDispatch();
    dispatch(getAllCountries);
    let countries = useSelector(state => state.countries);
    console.log(countries); 

    return (
        <div>
            <SearchBar />
            <div>

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