
import { types } from "../types/types";

// state = {
//     name : 'Alejandro'
//     logged : true
// }


// action = {
//     type : login | logout,
//     payload : {
//         name? : 'Alejandro',
//         logged : true 
//     }
// }

export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged : true
            }

        case types.logout:
            return {
                logged : false
            }
    
        default:
            return state
    }
}