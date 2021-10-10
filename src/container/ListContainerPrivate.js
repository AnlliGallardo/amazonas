// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { listarCards } from '../actions/actionCards';
// import { logout } from '../actions/actionLogin';



// export const ListContainerPrivate =  ({history}) => {

//     const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     history.replace('/listContainer');
//   }

// useEffect(() => {
//     dispatch(listarCards())
// }, [dispatch])

//     const { container } = useSelector(store => store.container)
//     console.log(container)

//     return (
//         <div>
//             {
//                 container.map((cont, index) => (

                
//                 <div key={index} className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
//                     <div className="row no-gutters">
//                         <div className="col-md-4">
//                             <img src={cont.poster} className="card-img" alt={cont.name} />
//                         </div>
//                         <div className="col-md-8">
//                             <div className="card-body">
//                                 <h5 className="card-title">{cont.name}</h5>
//                                 <p className="card-text">{cont.description}</p>
//                                 <p className="card-text">
//                                     <small className="text-muted"></small>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <button className="btn btn-primary"
//                         onClick={handleLogout}>Logout</button>
//                     </div>
//                 </div>
//             ))
//             }
//         </div>
//     )
// }