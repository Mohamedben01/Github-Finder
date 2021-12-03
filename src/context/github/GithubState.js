import React, { useReducer } from "react";
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from "axios";
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    SET_LOADING,
    GET_REPOS
} from '../types';

//In this file we are going to initial our state and actions.
const GithubState = props => {

    const initialState = {
        users: [],
        loading: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    //Our producer is going to be responsible of putting this into our state and sending it down to any components


    // Search Users
    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items,
        })
    }

    //Get User
    const getUser = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type: GET_USER,
            payload: res.data,
        })
    }

    //Get Repos
    const getUserRepos = async username => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    //Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos,
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;