import { types } from '../types/types'

const initialState = {
    mapa: [],
}


export const mapaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.mapa:
            return {
                ...state, 
                mapa: action.payload, ...state.mapa
            }

        default:
            return state
    }
}
