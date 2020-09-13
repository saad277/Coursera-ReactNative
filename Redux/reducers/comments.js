



import * as ActionTypes from '../ActionTypes'


const istate = {

    isLoading: true,
    errMessage: null,
    comments: []
}


const comments = (state = istate, action) => {


    switch (action.type) {

        case ActionTypes.ADD_COMMENTS:

            return {
                ...state,
                isLoading: false,
                errMessage: null,
                comments: action.payload
            }



        case ActionTypes.COMMENTS_FAILED:

            return {
                ...state,
                isLoading: true,
                errMessage: action.payload,
                comments: []
            }

        case ActionTypes.POST_COMMENTS:

            return {
                ...state,
                isLoading: false,
                errMessage: null,
                comments: [...state.comments, action.payload]
            }

        default:
            return state;

    }

}

export default comments;