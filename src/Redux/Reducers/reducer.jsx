import {
    LOGIN_DATA,
    IMAGE_URL,
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
const MessageListReducer = (state = [], action) => {
    switch (action.type) {
        case MESSAGE_LIST:
            console.log("ReducerData", action.payload)
            return {
                ...state,
                ImagePath: action.payload
            }
        default: return state
    }
}
export { AllDataReducers, ImageUrlReducer,MessageListReducer }