import { combineReducers } from 'redux';
import {AllDataReducers,ImageUrlReducer,MessageListReducer} from './Reducers/reducer';
export default combineReducers({
    AllDataReducers,
    ImageUrlReducer,
    MessageListReducer
});