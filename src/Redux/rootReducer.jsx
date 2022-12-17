import { combineReducers } from 'redux';
import { AllDataReducers, ImageUrlReducer, CurrentUserReducer, AllUserReducer, MessageListReducer } from './Reducers/reducer';
export default combineReducers({
    AllDataReducers,
    ImageUrlReducer,
    CurrentUserReducer,
    AllUserReducer,
    MessageListReducer
});