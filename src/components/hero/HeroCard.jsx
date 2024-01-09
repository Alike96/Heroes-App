import React from 'react'
import { Link } from 'react-router-dom'

const heroImages = require.context('../../assets/heroes/', true)

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-5'>
                    <img src={heroImages(`./${id}.jpg`)} className="card-img" alt={superhero} />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h5 className='card-title'>{superhero}</h5>
                        <p className="card-text"> {alter_ego}</p>
                        
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`} className='btn btn-outline-primary'>More...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroCard