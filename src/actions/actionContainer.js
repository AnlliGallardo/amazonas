import { collection, getDocs } from "@firebase/firestore";
import { bd } from "../firebase/configFirebase";
import { types } from "../types/types"



export const listarContainer = () => {
    return async (dispatch) => { 
        const querySnapshot = await getDocs(collection(bd, "colec"));
        const contai = [];
        querySnapshot.forEach((conta) => {
            // console.log(tar.data())
            contai.push({
                ...conta.data()
            })
        });
        dispatch(listarContai(contai));
    }
}

export const listarContai = (contai) => {
    return {
        type: types.container,
        payload: contai
    }
}