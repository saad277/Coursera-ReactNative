



import * as ActionTypes from '../ActionTypes'


const istate = {

    isLoading: true,
    errMessage: null,
    dishes: []
}


const dishes = (state = istate, action) => {


    switch (action.type) {

        case ActionTypes.ADD_DISHES:

            return {
                ...state,
                isLoading: false,
                errMessage: null,
                dishes: action.payload
            }


        case ActionTypes.DISHES_LOADING:

            return {
                ...state,
                isLoading: true,
                errMessage: null,
                dishes: []
            }
        case ActionTypes.DISHES_FAILED:

            return {
                ...state,
                isLoading: true,
                errMessage: action.payload,
                dishes: []
            }

        default:
            return state;

    }

}

export default dishes;