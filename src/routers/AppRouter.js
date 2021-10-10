import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { loginSincrono } from "../actions/actionLogin";
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";
import { AuthRouter } from "./AuthRouter";
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";

import { Navbar } from "../components/Navbar";
import { Navbar2 }  from "../components/Navbar2";
import {Registro} from '../components/Registro';
import { useDispatch } from "react-redux";
import { ListContainer } from "../container/ListContainer";
import { listarCards } from "../actions/actionCards";

import Login from "../components/Login";





export default function AppRouter() {

  const auth = getAuth();
  const [checking, setChecking] = useState(true)
  const [isLooggedIn, setsIsLoogedIn] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
        if (user?.uid) {
            dispatch(loginSincrono(user.uid, user.displayName))
            setsIsLoogedIn(true)
            dispatch(listarCards(user.uid))
            console.log(user.uid)
        } else {
            setsIsLoogedIn(false)
        }
        setChecking(false)
    })
}, [dispatch, setChecking])

if (checking) {
    return <Loading />
}

  return (
    <Router>
      <Navbar />
      <Navbar2 />
      <div>
                <Switch>
                    <PrivateRouter
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated ={isLooggedIn}
                    />

                    <Route
                        path="/"
                        component={ListContainer}
                    />

                    <PublicRouter
                        path="/login"
                        component={Login}
                        isAuthenticated ={isLooggedIn}
                    />

                    <PublicRouter
                        path="/registro"
                        component={Registro}
                        isAuthenticated ={isLooggedIn}
                    />

                </Switch>
            </div>
    </Router>
  );
}