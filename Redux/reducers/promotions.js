



import * as ActionTypes from '../ActionTypes'


const istate = {

    isLoading: true,
    errMessage: null,
    promos: []
}


const promos = (state = istate, action) => {


    switch (action.type) {

        case ActionTypes.ADD_PROMOS:

            return {
                ...state,
                isLoading: false,
                errMessage: null,
                promos: action.payload
            }


        case ActionTypes.PROMOS_LOADING:

            return {
                ...state,
                isLoading: true,
                errMessage: null,
                promos: []
            }
        case ActionTypes.PROMOS_FAILED:

            return {
                ...state,
                isLoading: true,
                errMessage: action.payload,
                promos: []
            }

        default:
            return state;

    }

}

export default promos;