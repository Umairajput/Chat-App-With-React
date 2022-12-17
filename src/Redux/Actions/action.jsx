import { LOGIN_DATA, IMAGE_URL, MESSAGE_LIST ,CURRENT_USER,ALL_USER} from "../types";

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
const CurrentUser = (CurrentProfile) => async (dispatch) => {
    // console.log("actionData",CurrentProfile)
    dispatch({
        type: CURRENT_USER,
        payload: CurrentProfile
    })
}
const AllUser = (AllUserData) => async (dispatch) => {
    // console.log("actionData",CurrentProfile)
    dispatch({
        type: ALL_USER,
        payload: AllUserData
    })
}
const MessageList = (AllMessages) => async (dispatch) => {
    // console.log("actionData",AllMessages)
    dispatch({
        type: MESSAGE_LIST,
        payload: AllMessages
    })
}
export {
    LoginUserData,
    ImageURL,
    CurrentUser,
    AllUser,
    MessageList
};