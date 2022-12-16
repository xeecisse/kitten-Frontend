import { SET_MODEL_LIST } from "./actionTypes"
import { fetchApi } from "./api"

export function getModelList (callback=f=>f, error=f=>f) {
    return dispatch => {
        fetchApi('model-list')
        .then(resp => {
            if(resp && resp.data) {
                dispatch({ type: SET_MODEL_LIST, payload: resp.data})
            }
            callback()
        }).catch(err => {
            error(err)
        })
    }
}