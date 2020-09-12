



import * as ActionTypes from '../ActionTypes'


const istate = {

    isLoading: true,
    errMessage: null,
    leaders: []
}


const leaders = (state = istate, action) => {


    switch (action.type) {

        case ActionTypes.ADD_LEADERS:

            return {
                ...state,
                isLoading: false,
                errMessage: null,
                leaders: action.payload
            }


        case ActionTypes.LEADERS_LOADING:

            return {
                ...state,
                isLoading: true,
                errMessage: null,
                leaders: []
            }
        case ActionTypes.LEADERS_FAILED:

            return {
                ...state,
                isLoading: true,
                errMessage: action.payload,
                leaders: []
            }

        default:
            return state;

    }

}

export default leaders;