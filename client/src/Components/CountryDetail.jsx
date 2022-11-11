import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountryByID } from '../Actions/index.js';
import CardCountry from './CardCountry.jsx';
import "./CountryDetail.css";
import CardActivity from './CardActivity';
function CountryDetail() {

  const { pathname } = useLocation();
  const countryDetail = useSelector(state => state.country);
  const dispatch = useDispatch();


  useEffect(() => {
    const idCourrentCountry = pathname.split("/")[2];
    getCountryByID(dispatch, idCourrentCountry);
  }, [])

  return (
    <div className="country-detail-container">
      <CardCountry {...countryDetail} />
      <div className="country-detail-activities-container">
        {countryDetail.touristActivities?.map(activity => <CardActivity {...activity} />)}
      </div>
    </div>


  )
}

export default CountryDetail