import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

//In this file we are going to initial our state and actions.
const AlertState = props => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);
    //Our producer is going to be responsible of putting this into our state and sending it down to any components


    //Alert 
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;