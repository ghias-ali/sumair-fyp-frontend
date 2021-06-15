import * as t from './actionsTypes';

export const setLoginState = (payload) => dispatch => {
    dispatch({
        type: t.SET_LOGIN_STATE, payload
    });
};

export const setIsLoaded = (payload) => dispatch => {
    dispatch({
        type: t.SET_LOADED, payload
    });
};  
export const setUserProfile = (payload) => dispatch => {
    dispatch({
        type: t.SET_USER_PROFILE, payload
    });
}; 
export const setSignInProfile = (payload) => dispatch => {
    dispatch({
        type: t.SET_SIGNIN_PROFILE, payload
    });
}; 
export const setStoreOwner = (payload) => dispatch => {
    dispatch({
        type: t.SET_STORE_OWNER, payload
    });
}; 
export const setToken = (payload) => dispatch => {
    dispatch({
        type: t.SET_TOKEN, payload
    });
}; 
export const setPath = (payload) => dispatch => {
    dispatch({
        type: t.SET_PATH, payload
    });
}; 