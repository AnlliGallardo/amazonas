import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { bd } from '../firebase/configFirebase'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import { loadList } from '../helper/loadList'




export const ListNew = (list) => {
    return async (dispatch, getSate) => {
        const id = getSate().login.id
        console.log(id);
        const newProduc = {
            url: list.url,
            nombre: list.nombre,
            description: list.description
        }

        await addDoc(collection(bd, `${id}/list/data`), newProduc);
        dispatch(addNewList(newProduc))
    }
}

export const addNewList = (list) => ({
    type: types.listAddNew,
    payload: {
        ...list
    }
})


//Listar
export const Listarr = (uid) => {
    return async (dispatch) => {
        const prod = await loadList(uid)
        dispatch(setList(prod))
    }
}

export const setList = (list) => {
    return {
        type: types.listLoad,
        payload: list
    }
}

//Actualizar 
export const activeList = (id, list) => {
    return {
        type: types.listActive,
        payload: {
            id,
            ...list
        }
    }
}

export const Edit = (list) => {
    return async (dispatch, getState) => {
        const id = getState().login.id;
        console.log(list)

        const EditProduc = {
            url: list.url,
            nombre: list.nombre,
            description: list.description
        }

        const cardFire = { ...EditProduc }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const docRef = await doc(bd, `${id}/list/data/`, `${list.id}`);
        console.log(docRef)
        
        const updateTimestamp = await updateDoc(docRef, {
            url: list.url,
            nombre: list.nombre,
            description: list.description
        });

        Swal.fire('Saved', list.nombre, 'success');
        dispatch(Listarr(id))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().login.id;
        await deleteDoc(doc(bd, `${uid}/list/data/`, `${id}`));


        dispatch(deleteList(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(Listarr(uid))
    }
}

export const deleteList = (id) => ({
    type: types.listDelete,
    payload: id
});