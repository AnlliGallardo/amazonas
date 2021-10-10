import { types } from '../types/types'

const initialState = {
    container: [],
}


export const containerReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.container:
            return {
                ...state, 
                container: action.payload, ...state.container
            }

        default:
            return state
    }
}
