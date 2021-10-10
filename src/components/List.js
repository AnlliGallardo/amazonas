// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { activeList, Delete, Edit, ListNew } from '../actions/actionList'
// import { useForm } from '../hook/useForm'
// import { Listarr } from '../actions/actionList'


// const List = () => {
//     const dispatch = useDispatch()
//     const {list} = useSelector(state => state.list)

   
//     const [values, handleInputChange, reset,setValues] = useForm({
//         id:'',
//         url: '',
//         nombre:'',
//         description:''
//     })

//     const [error, setError] = useState(false)
//     const [editForm, setEditForm] = useState(false)

//     const {id, url, nombre, description } = values

//     const handleOnSubmit =  (e) => {
//         e.preventDefault() 
//     }

//     const handleAdd = () => {
//       dispatch(ListNew(values))
//     }
    

//     const handleDelete = async(id) => {
//         dispatch(Delete(id))
//         console.log('id',id);
//     }

//     const handleEdit = (list) => {
//         dispatch(activeList(list.id, list))
//         setEditForm(true)
//         setValues({
//           ...list
//         })
       
//     }

//     const handlePut = async() => {
//       dispatch(Edit(values))
//       reset()
//       setEditForm(false)
//     }

//     useEffect(() => {
//         dispatch(Listarr());
//       }, [])
    
    
//     return (
//         <div className="container mt-5">
//             <h1>Productos</h1>
//             <hr />
//             <div className="row">
//                 <div className="col-8">
//                     <h3 className="text-center">Listas de Tareas</h3>
//                     <ul className='list-group'>
//                         {
//                             list.map(data =>(
//                                 <li className="list-group-item" key={data.id}>
//                                 <span>{data.nombre}</span>
                               
//                                 <button
//                                     className="btn btn-warning btn-sm float-end me-1"
//                                     onClick={handleEdit(data)}>
//                                     Editar
//                                 </button>
//                                 <button className="btn btn-danger btn-sm float-end me-1"
//                                     onClick={handleDelete(data.id)}
//                                 >
//                                     Eliminar
//                                 </button>
//                             </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//                 <div className="col-4">
//                     <h3 className="text-center">Agregar Producto</h3>
//                     {
//                         error &&
//                         <div class="alert alert-danger" role="alert">
//                             Los campos son obligatorios
//                         </div>
//                     }

//                     <form className="form-group" onSubmit={handleOnSubmit}>
//                         <input
//                             type="text"
//                             name="url"
//                             className="form-control"
//                             placeholder="url"
//                             value={url}
//                             onChange={handleInputChange}
//                         />
//                         <input
//                             type="text"
//                             name="nombre"
//                             className="form-control"
//                             placeholder="nombre"
//                             value={nombre}
//                             onChange={handleInputChange}
//                         />

//                         <textarea
//                             name="description"
//                             className="form-control mt-2"
//                             autoComplete="of"
//                             value={description}
//                             onChange={handleInputChange}
//                         ></textarea>
//                         <div className="d-grid gap-2 mx-auto">
//                             {
//                                 !editForm
//                                     ?
//                                     <button
//                                         className="btn btn-dark"
//                                         type="submit" onClick={handleAdd}>Enviar</button>
//                                     :
//                                     <button
//                                         className="btn btn-dark"
//                                         type="submit" onClick={handlePut}>Guardar</button>

//                             }
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default List
