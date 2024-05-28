import {
    HOME, 
    DESIGNS, 
    LOGIN, 
    SERVICES, 
    ESTIMATES, 
    BLOG, 
    PORTFOLIO, 
    CONTACT,
    CAREER,
    ADMIN,
    PARTNER,
    TERMS,
    PRIVACY,
    PAYMENT_GATEWAY, 
    ADD_EXPERIENCE,
    ADD_MASSAGE_TYPE,
    ADD_INTENSITY,
    ADD_LOOKING_FOR,
    ADD_WHERESYOUR_PAIN,
} from '../actions/actions'

export const reducer = (state, action) => {
    switch (action.type){
////////////////
        // case ('SET_ROUTE') : {
        //     return {...state,
        //         Routes: { ...state.Routes, [action.payload.route]: action.payload.value },
        //       };
        // }

        // case ('RESET_ROUTE') : {
        //     return {...state,
        //         Routes: { ...state.Routes, [action.payload]: "" }, // Reset the route value to its initial state
        //       };
        // }
////////////////
        case (HOME) : {
            return {...state, Home: action.payload}
        }
        case (DESIGNS) : {
            return {...state, Designs: action.payload}
        }
        case (LOGIN): {
            return {...state, Login: action.payload}
        }
        case (CONTACT) : {
            return {...state, Contact: action.payload}
        }
        case (SERVICES): {
            return {...state, Services: action.payload}
        }
        case (ESTIMATES): {
            return {...state, Estimates: action.payload}
        }
        case (PORTFOLIO): {
            return {...state, Portfolio: action.payload}
        }
        case (CAREER): {
            return {...state, Career: action.payload}
        }
        case (ADMIN): {
            return {...state, Admin: action.payload}
        }
        case (BLOG): {
            return {...state, Blog: action.payload}
        }
        case (PAYMENT_GATEWAY): {
            return {...state, PaymentGateway: action.payload}
        }
        case (PARTNER) : {
            return {...state, Partner: action.payload}
        }
        case (TERMS): {
            return {...state, Terms: action.payload}
        }
        case (PRIVACY) : {
            return {...state, Privacy: action.payload}
        }

        case ADD_EXPERIENCE : {
            return {...state, experience: action.payload}
        }
        case (ADD_MASSAGE_TYPE): {
            return {...state, massageType: action.payload}
        }
        case ADD_INTENSITY : {
            return {...state, intensity: action.payload}
        }
        case (ADD_LOOKING_FOR): {
            return {...state, lookingFor: action.payload}
        }
        case (ADD_WHERESYOUR_PAIN): {
            return {...state, wheresYourPain: action.payload}
        }
    }
}