import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import { loginReducer } from '../reducers/loginReducer';
import { registroReducer } from '../reducers/registroReducer';
import { cardsReducer } from '../reducers/cardsReducer';
import { containerReducer } from "../reducers/containerReducer";
import { listReducer } from "../reducers/listReducer";
import { mapaReducer } from "../reducers/mapaReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; 

const reducers = combineReducers({
    login: loginReducer,
    registro: registroReducer, 
    cards: cardsReducer,
    container: containerReducer,
    mapa: mapaReducer,
    list: listReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))   
)
