import { heroes } from "../data/heroes"

export const getHeroesByName = (name) => { 

    if (name === ''){
        return []
    }

    const heroesFilter = heroes.filter( (hero) => {

        return hero.superhero.toLowerCase().includes(name.toLowerCase())
    } )

    return heroesFilter
 }