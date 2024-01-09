import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];
    if(!validPublishers.includes(publisher)){
        // eslint-disable-next-line
        throw(`Error: ${publisher} no permitido. solo se permiten : 'Marvel Comics', 'DC Comics'`) 
    }

    return (
        heroes.filter(({publisher : pub}) => pub === publisher)
    )
}
