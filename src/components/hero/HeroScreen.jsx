import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'


const heroImages = require.context('../../assets/heroes/', true)

const HeroScreen = () => {

  const {heroId} = useParams()
  const navigate = useNavigate()

  const hero = useMemo( () => getHeroById(heroId), [heroId] ) 
  

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero

  return (
    <>
        {
          hero ? (
            <div>
              <h1>{superhero}</h1>
              <hr />
              <div className='row mt-1'>
                <div className='col-4'>
                  <img src={heroImages(`./${id}.jpg`)} className='img-thumbnail animate__animated animate__fadeInLeft' alt={superhero} />
                </div>
                <div className='col-8 animate__animated animate__fadeIn'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                  </ul>
                  <h5 className='mt-4 mx-2'>Characters:</h5>
                  <p className='mx-2'>{characters}</p>
                  <button className='btn btn-outline-info mt-5'
                    onClick={() => navigate(-1)}>
                    Go back!
                  </button>
                </div>
              </div>
            </div>
          ) :
          (
            <Navigate to='/' />
          )
        }
    </>
  )
}

export default HeroScreen