import {
    USER_DETAILS_UPDATE,
} from "./types";

const initialState = {
    name: '',
    roles: [],
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_DETAILS_UPDATE:
            return {
                ...state,
                 ...payload.user,
            };
        default:
            return state;
    }
};

export default reducer;
