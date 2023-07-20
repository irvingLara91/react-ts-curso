import {getData, removeData, setData} from "../lib/utils.tsx";


const initialData = {
    loggedIn: false,
    fetching: false,
    user: null,
    error_msg: null

}

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOG_OUT = 'LOG_OUT'



const authReducer = (state=initialData,action:any) => {
    switch(action.type){
        case LOGIN:
            return {...state, fetching: true, error_msg: ''};
        case LOGIN_SUCCESS:
            return {...state, user: action.payload, loggedIn: true, fetching: false, error_msg: null};
        case LOG_OUT:
            return {...state, fetching: false, loggedIn: false, user: action.payload}
        case LOGIN_ERROR:
            return {...state, error_msg: action.payload, fetching: false};
        default:
            return state
    }
}
export default authReducer;

/***Se guarda la información del usuario en el AsyncStorage***/
export const saveStore = async (storage:object) => {
    try {
        await setData('user',storage);
    } catch (error) {
        // Error saving data
    }
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const sessionAction = () => async dispatch => {
    dispatch({type: LOGIN});
    try {
        const user_data =  await getData('user')
        if (user_data){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user_data
            })
        }else{
            dispatch({type: LOG_OUT, payload: null})
            await clearUser();
        }

    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_ERROR, payload: {}})
    }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const loginAction = (data:object) => async dispatch => {
    dispatch({type: LOGIN});
    try {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data
        })
        await saveStore(data)

    } catch (error) {
        console.log(error);
        dispatch({type: LOGIN_ERROR, payload: {}})
    }
};



/***Se borra el usuario del AsyncStorage***/
export const clearUser = async () => {
    try {
        await removeData('user');
    } catch (error) {
        // Error saving data
    }
}

/***Función action para cerrar sesión***/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const logOutAction = () => async dispatch => {
        try {
            dispatch({type: LOG_OUT, payload: null})
            alert("Sesion cerrada")
            await clearUser();
        } catch (err) {
            await clearUser();
            dispatch({type: LOGIN_ERROR, payload: err})
        }

}
