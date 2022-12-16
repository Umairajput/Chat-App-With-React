import { LOGIN_DATA, IMAGE_URL, MESSAGE_LIST } from "../types";

const LoginUserData = (loginInformation) => async (dispatch) => {
    // console.log("actionData",loginInformation)
    dispatch({
        type: LOGIN_DATA,
        payload: loginInformation
    })
}
const ImageURL = (ImagePath) => async (dispatch) => {
    // console.log("actionData",ImagePath)
    dispatch({
        type: IMAGE_URL,
        payload: ImagePath
    })
}
const MessageList = (AllMessages) => async (dispatch) => {
    console.log("actionData",AllMessages)
    dispatch({
        type: MESSAGE_LIST,
        payload: AllMessages
    })
}
export {
    LoginUserData,
    ImageURL,
    MessageList
};