import { LOGIN_DATA,IMAGE_URL } from "../types";

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
export {
    LoginUserData,
    ImageURL
};