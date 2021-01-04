import axios from 'axios';
const initState = {
    userId: 0,
    userName:'',
    fullName:'',
    email:'',
    phoneNumber:'',
    address : ''
}

export function getAllUser() {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:8080/api/get-all-user', {})
        console.log(response.data[0])
        dispatch({ type: "getAllUser", payload: response.data[0] });
    }
}
export const getUserById = (id) => async (dispatch) => {
    //call api 
    const response = await axios.post('http://localhost:8080/api/get-user_by_id', id);
    dispatch({ type: "getUserById", payload: response.data });
}

export const updateUser = (user) => async dispatch => {
    //call api 
    const response = await axios.post('http://localhost:8080/api/update-user', user);
    dispatch({ type: "updateUser", payload: response.data });
}
export const deleteUser = id => async dispatch => {
    //call api 
    const response = await axios.post('http://localhost:8080/api/delete-user', user);
    dispatch({ type: "deleteUser", payload: response.data });
}
export const createUser = id => async user =>{
    const response = await axios.post('http://localhost:8080/api/create-user', user);
    dispatch({ type: "createUser", payload: response.data });
}
}
export const listUserReducer = (state = initState, action) => {
    switch (action.type) {
        case "getAllUser": {
            return {
                ...state,
                userId: action.payload["userId"]
            }
        }
        case "getUserById":
            return {
                ...state,
                userId: action.payload.data.userId
            }
        case "updateUser":
            return {
                ...state,
                userId: action.payload["userId"]
            }
        case "deleteUser":
            return {
                ...state,
                userId: action.payload["userId"]
            }
        case "createUser":
            return {
                ...state,
                userId:action.payload["userId"]
            }
        default:
            console.log("Aaaa")
            break;

    }
    return state
}
