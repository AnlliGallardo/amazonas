import { types } from '../types/types'

const initialState = {
    list: [],
    active: {
        id: '',
        url: '',
        nombre: '',
        description: ''
    }
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.listAddNew:
            return {
                ...state, 
                list: [action.payload, ...state.list]
            }

        case types.listLoad:
            return {
                ...state,
                list: [...action.payload]
            }

        case types.listActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        default:
            return state
    }
}
