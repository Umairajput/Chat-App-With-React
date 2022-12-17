import {
    LOGIN_DATA,
    IMAGE_URL,
    CURRENT_USER,
    ALL_USER,
    MESSAGE_LIST
} from '../types';

const initialState={
    loginInformation:[]
}
const AllDataReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_DATA:
            // console.log('action.payload', action.payload)
            return {
                ...state,
                loginInformation: [...state.loginInformation, action.payload]
            }
        default: return state
    }
}
const ImageUrlReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_URL:
            // console.log("ReducerData", action.payload)
            return {
                ...state,
                ImagePath: action.payload
            }
        default: return state
    }
}
const CurrentUserReducer = (state = [], action) => {
    switch (action.type) {
        case CURRENT_USER:
            // console.log("ReducerData", action.payload)
            return {
                ...state,
                CurrentProfile: action.payload
            }
        default: return state
    }
}
const AllUserReducer = (state = [], action) => {
    switch (action.type) {
        case ALL_USER:
            // console.log("ReducerData", action.payload)
            return {
                ...state,
                AllUserData: action.payload
            }
        default: return state
    }
}
const MessageListReducer = (state = [], action) => {
    switch (action.type) {
        case MESSAGE_LIST:
            // console.log("ReducerData", action.payload)
            return {
                ...state,
                AllMessages: action.payload
            }
        default: return state
    }
}
export { AllDataReducers, ImageUrlReducer,CurrentUserReducer, AllUserReducer ,MessageListReducer }