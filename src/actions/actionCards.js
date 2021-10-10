import { collection, getDocs } from "@firebase/firestore";
import { bd } from "../firebase/configFirebase";
import { types } from "../types/types"



export const listarCards = () => {
    return async (dispatch) => { 
        const querySnapshot = await getDocs(collection(bd, "tarjetas"));
        const card = [];
        querySnapshot.forEach((tar) => {
            // console.log(tar.data())
            card.push({
                ...tar.data()
            })
        });
        dispatch(listar(card));
    }
}

export const listar = (card) => {
    return {
        type: types.cards,
        payload: card
    }
}