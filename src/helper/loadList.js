import { bd } from '../firebase/configFirebase'
import { getDocs, collection } from 'firebase/firestore'


export const loadList = async (id) => {
    console.log('hola',id)
    const querySnapshot = await getDocs(collection(bd,`${id}/list/data/`));
    const productoList = [];
    
    querySnapshot.forEach(pro=>{
        productoList.push({
        id:pro.id,
        ...pro.data()
       })
    })


    return productoList
}

