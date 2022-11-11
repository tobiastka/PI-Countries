import React from 'react'
import "./SearchBar.css";
import { useSelector } from 'react-redux';

const howManyPagesArray = (numberOfCountries, countriesPerPege) => {
  const numberOfPages = Math.ceil(numberOfCountries / countriesPerPege);
  const arrayOfPages = [];
  for (let i = 1; i < numberOfPages; i++) {
    arrayOfPages.push(i);
  }
  return arrayOfPages;
}

function SearchBar({ numberOfCountries, countriesPerPege, PAGE_SETTER, FILTER_SETTER }) {

  let arrayOfPages = howManyPagesArray(numberOfCountries, countriesPerPege);

  const filtersControler = (e) => {
    FILTER_SETTER({ [e.target.name]: e.target.value })
  }

  const allCountries = useSelector(state => state.countries);
  const allActivities = allCountries.filter(country => country.touristActivities.length).map(countryWithActivity => countryWithActivity.touristActivities).flat().map(activity => activity.name);
  const allActivitiesNoRepeat = [];
  allActivities.forEach(activity => {
    if(!allActivitiesNoRepeat.includes(activity)) allActivitiesNoRepeat.push(activity)
  })
  
  return (
    <div className='searchbar-container'>

      <div class="pagination">{
        arrayOfPages?.map((page) => {
          return <a key={page} onClick={() => { PAGE_SETTER(page) }}>{page}</a>
        })
      }</div>

      <div id='filter-name'>
        <label>Search by name</label>
        <input type="text" name='name' onChange={(e) => { filtersControler(e) }} />
      </div>

      <div id='filter-continent'>
        <label>Filter by continent</label>
        <select name="continent" onChange={(e) => { filtersControler(e) }}>
          <option value="Continent">Continent</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="North America">Central America</option>
          <option value="North America">Antarctica</option>
        </select>
      </div>

      <div id='filter-activity'>
        <label>Filter by activity</label>
        <select name="activity" onChange={(e) => { filtersControler(e) }}>
          <option value="Activity">Activity</option>
          {allActivitiesNoRepeat?.map(activity => <option key={activity} value={activity}>{activity}</option>)}
        </select>
      </div>

      <div id='filter-alphabetically'>
        <label>Filter by alphabetical order</label>
        <div className="filter-radio-option">
          <label>A-Z</label>
          <input type="radio" name="radio" value={"AZ"} onFocus={(e) => { filtersControler(e) }} />
        </div>
        <div className="filter-radio-option">
          <label>Z-A</label>
          <input type="radio" name="radio" value={"ZA"} onFocus={(e) => { filtersControler(e) }} />
        </div>
      </div>

      <div id='filter-population'>
        <label>Filter by population</label>
        <div className="filter-radio-option">
          <label>Asc</label>
          <input type="radio" name="radio" value={"ASC"} onFocus={(e) => { filtersControler(e) }} />
        </div>
        <div className="filter-radio-option">
          <label>Des</label>
          <input type="radio" name="radio" value={"DES"} onFocus={(e) => { filtersControler(e) }} />
        </div>
      </div>

      <div id='filter-not'>
        <div className="filter-radio-option">
          <label>no filter</label>
          <input type="radio" name="radio" value={"none"} onFocus={(e) => { filtersControler(e) }} />
        </div>
      </div>

    </div>
  )
}

export default SearchBar