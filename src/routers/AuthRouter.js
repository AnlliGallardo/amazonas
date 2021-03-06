import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Mapa from "../components/Mapa";



export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    

                  <Route 
                        exact
                        path="/auth/mapa"
                        component={ Mapa }
                    />               
                    <Redirect to="/auth" />

                </Switch>
            </div>

        </div>
    )
}