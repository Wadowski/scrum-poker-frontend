import {
    UPDATE_ROOM,
} from "./types";

const initialState = {
    id: '0',
    people: [],
    voteStarted: false,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_ROOM:
            return {
                ...state,
                ...payload.room,
            };
        default:
            return state;
    }
};

export default reducer;
