import React from 'react'
import "./FormTouristActivity.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllCountries, postTouristActivity } from '../Actions';
function FormTouristActivity() {


  // HOOCKS
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.countries);
  useEffect(() => {
    getAllCountries(dispatch);
  }, [])


  // INPUTS Y ERRORES
  const [inputs, inputsSetter] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countries: []
  })

  const [errorClass, errorClassSetter] = useState({
    name: "",
    duration: "",
    season: "",
    countries: "",
    name: "",
    difficulty: ""
  })

  const changeInputHandler = (e) => {
    const inputToChange = e.target.name;
    const newValue = e.target.value;
    inputsSetter({
      ...inputs,
      [inputToChange]: inputToChange === 'countries' ?
        (inputs.countries.includes(newValue) || newValue === ""
          ?
          [...inputs.countries]
          :
          [...inputs.countries, newValue])
        : newValue
    });
  }

  const deleteFromCountriesState = (e) => {
    console.log(e.target.value);
    const courrentCountries = [...inputs.countries];
    courrentCountries.splice(courrentCountries.indexOf(e.target.value), 1)
    inputsSetter({
      ...inputs,
      countries: courrentCountries
    })
  }

  useEffect(() => {
    errorClassSetter({
      name: inputs.name === "" ? "error" : "",
      duration: inputs.duration === "" ? "error" : "",
      season: inputs.season === "" ? "error" : "",
      countries: JSON.stringify(inputs.countries) === "[]" ? "error" : "",
      difficulty: inputs.difficulty === "" ? "error" : ""
    })
  }, [inputs])

  // TO MAP OPTIONS
  const ALL_SEASONS = ["Summer", "Winter", "Fall", "Spring"];
  const ALL_COUNTRIES_NAMES = allCountries.map(country => country.name);
  const ALL_DIFFICULTIES = ["Child", "Adult"];
  
  // SEND FORM
  const submitHandler = (e) => {
    if (Object.values(errorClass).includes("error")) return;
    console.log(postTouristActivity(dispatch, inputs));
    inputsSetter({
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countries: []
    })

  }

  return (
    <div className='form-tourist-activity'>
      <div class="container-text">
        <h2>CREATE AN ACTIVITY</h2>
        <input type="text" value={inputs.name} className={errorClass.name} name='name' placeholder="Name of the activity" onChange={(e) => changeInputHandler(e)} />
        <input type="text" value={inputs.duration} className={errorClass.duration} name='duration' placeholder="Duration of the activity" onChange={(e) => changeInputHandler(e)} />
        <select className={errorClass.season} name='season' id="" onChange={(e) => changeInputHandler(e)}>
          <option value="">Season</option>
          {ALL_SEASONS?.map(season => <option key={season} value={season}>{season}</option>)}
        </select>
        <select className={errorClass.countries} name="countries" id="" onChange={(e) => changeInputHandler(e)}>
          <option value="" >Country</option>
          {ALL_COUNTRIES_NAMES?.map(countryName => <option key={countryName} value={countryName}>{countryName}</option>)}
        </select>

        <div className="countries">
          {
            inputs.countries?.map((country) => {
              return (<>

                <button key={country} value={country} onClick={(e) => { deleteFromCountriesState(e) }}>{country}</button>
              </>)
            })
          }
        </div>

        <select className={errorClass.difficulty} name="difficulty" id="" onChange={(e) => changeInputHandler(e)}>
          <option value="">Age / Difficulty</option>
          {ALL_DIFFICULTIES?.map(Difficulty => <option key={Difficulty} value={Difficulty}>{Difficulty}</option>)}
        </select>
        <button onClick={(e) => { submitHandler(e) }} className="form-tourist-activity-button">Submit</button>
      </div>
    </div>
  )
}

export default FormTouristActivity

/*
__Ruta de creación de actividad turística__: debe contener

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultáneo
- [ ] Botón/Opción para crear una nueva actividad turística

*/