import { combineReducers } from "redux";

import { reducer as cardReducer } from './card/reducer';
import { reducer as roomReducer } from './room/reducer';

export default combineReducers({
    card: cardReducer,
    room: roomReducer,
})
