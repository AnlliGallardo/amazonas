import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listarCards } from '../actions/actionCards';




export const ListContainer =  () => {

    const dispatch = useDispatch();

useEffect(() => {
    dispatch(listarCards())
}, [dispatch])

    const { cards } = useSelector(store => store.cards)
    console.log(cards)

    return (
        <div>
            {
                cards.map((cardd, index) => (

                
                <div key={index} className="card ms-3 animate__animated animate__fadeIn" style={{ maxWidth: 540 }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={cardd.poster} className="card-img" alt={cardd.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{cardd.name}</h5>
                                <p className="card-text">{cardd.description}</p>
                                <p className="card-text">
                                    <small className="text-muted"></small>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            ))
            }

        </div>
    )
}