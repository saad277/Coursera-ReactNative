import * as ActionTypes from './ActionTypes'

import { baseUrl } from '../shared/baseUrl'



export const fetchComments = () => {



    return (dispatch) => {


        return fetch(baseUrl + "comments")
            .then((response) => {

                if (response.ok) {

                    return response
                } else {

                    var error = new Error("Error" + response.status + " : " + response.statusText)
                    error.response = response
                    throw error;
                }

            }, (error) => {

                var errMessage = new Error(error.message)
                throw errMessage

            })
            .then((response) => response.json())
            .then((comments) => dispatch(addComments(comments)))
            .catch((error) => dispatch(commentsFailed(error.message)))

    }


}


export const commentsFailed = (errorMessage) => {

    return {

        type: ActionTypes.COMMENTS_FAILED,
        payload: errorMessage,

    }

}

export const addComments = (comments) => {


    return {
        type: ActionTypes.ADD_COMMENTS,
        payload: comments

    }


}





export const fetchDishes = () => {





    return (dispatch) => {

        dispatch(dishesLoading())

        return fetch(baseUrl + "dishes")
            .then((response) => {

                if (response.ok) {

                    return response
                } else {

                    var error = new Error("Error" + response.status + " : " + response.statusText)
                    error.response = response
                    throw error;
                }

            }, (error) => {

                var errMessage = new Error(error.message)
                throw errMessage

            })
            .then((response) => response.json())
            .then((dishes) => dispatch(addDishes(dishes)))
            .catch((error) => dispatch(dishesFailed(error.message)))

    }


}



export const dishesLoading = () => {

    return {

        type: ActionTypes.DISHES_LOADING,
    }

}



export const dishesFailed = (errorMessage) => {

    return {

        type: ActionTypes.DISHES_FAILED,
        payload: errorMessage,

    }

}

export const addDishes = (dishes) => {


    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes

    }


}








export const fetchPromos = () => {





    return (dispatch) => {

        dispatch(promosLoading())

        return fetch(baseUrl + "promos")
            .then((response) => {

                if (response.ok) {

                    return response
                } else {

                    var error = new Error("Error" + response.status + " : " + response.statusText)
                    error.response = response
                    throw error;
                }

            }, (error) => {

                var errMessage = new Error(error.message)
                throw errMessage

            })
            .then((response) => response.json())
            .then((promos) => dispatch(addPromos(promos)))
            .catch((error) => dispatch(promosFailed(error.message)))

    }


}



export const promosLoading = () => {

    return {

        type: ActionTypes.PROMOS_LOADING,
    }

}



export const promosFailed = (errorMessage) => {

    return {

        type: ActionTypes.PROMOS_FAILED,
        payload: errorMessage,

    }

}

export const addPromos = (promos) => {


    return {
        type: ActionTypes.ADD_PROMOS,
        payload: promos

    }


}














export const fetchLeaders = () => {





    return (dispatch) => {

        dispatch(leadersLoading())

        return fetch(baseUrl + "leaders")
            .then((response) => {

                if (response.ok) {

                    return response
                } else {

                    var error = new Error("Error" + response.status + " : " + response.statusText)
                    error.response = response
                    throw error;
                }

            }, (error) => {

                var errMessage = new Error(error.message)
                throw errMessage

            })
            .then((response) => response.json())
            .then((leaders) => dispatch(addLeaders(leaders)))
            .catch((error) => dispatch(leadersFailed(error.message)))

    }


}



export const leadersLoading = () => {

    return {

        type: ActionTypes.LEADERS_LOADING,
    }

}



export const leadersFailed = (errorMessage) => {

    return {

        type: ActionTypes.LEADERS_FAILED,
        payload: errorMessage,

    }

}

export const addLeaders = (leaders) => {


    return {
        type: ActionTypes.ADD_LEADERS,
        payload: leaders

    }


}


export const postFavorite = (dishId) => {

    return (dispatch) => {

        setTimeout(() => {
            dispatch(addFavorite(dishId));
        }, 2000);
    };


}

export const addFavorite = (dishId) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: dishId
});