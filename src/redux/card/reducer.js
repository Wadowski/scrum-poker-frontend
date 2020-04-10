import {
    CARD_UPDATE,
} from "./types";

const initialState = {
    value: null,
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CARD_UPDATE:
            return {
                ...state,
                 ...payload.card,
            };
        default:
            return state;
    }
};

export default reducer;
