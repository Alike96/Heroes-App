import React, { useMemo } from 'react';

import {useNavigate, useLocation} from 'react-router-dom'
import queryString from 'query-string'

import useForm from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName.js';
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {

  const navigate = useNavigate()
  
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)
  
  const initialFormState = {
    searchText : q
  }

  const [{searchText}, handleOnChangeEvent] = useForm(initialFormState)

  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }
  
  const heroesFiltered = useMemo( () => getHeroesByName(q), [q])
  

  return (
    <div className='row'>
      <h1>Search Page</h1>
      <hr />
      <div className="col-5">
        <h2>Buscar</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            className='form-control'
            placeholder='Search a hero...'
            autoComplete='off'
            name="searchText"
            value={searchText}
            id="" 
            onChange={handleOnChangeEvent}/>
          <button 
            className='form-control btn btn-outline-info mt-1'
            type='submit'>
            Search
          </button>
        </form>
      </div>
      <div className="col-7">
        <h2>Results</h2>
        <hr />
        {
          q === '' ? 
          (
            <div className="alert alert-info animate__animated animate__bounceIn">Busca un heroe</div>
          ) : (heroesFiltered.length === 0) &&
          <div className="alert alert-danger animate__animated animate__bounceIn">No hay resultados para: {q}</div>
        }
        {
          heroesFiltered.map(
            (hero) => {
              return <HeroCard  key={hero.id} {...hero} />
            }
            )
        }
      </div>
    </div>
  );
}

export default SearchScreen;
