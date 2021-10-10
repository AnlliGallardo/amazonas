import { types } from '../types/types'

const initialState = {
    cards: [],
}


export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cards:
            return {
                ...state, 
                cards: action.payload, ...state.cards
            }

        default:
            return state
    }
}
