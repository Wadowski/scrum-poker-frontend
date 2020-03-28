import {
    CARD_VALUE_UPDATE,
    UPDATE_ROOM_ID,
} from "./types";

const initialState = {
    roomId: '0',
    cardValue: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CARD_VALUE_UPDATE:
            return {
                ...state,
                cardValue: payload.cardValue,
            };
        case UPDATE_ROOM_ID:
            return {
                ...state,
                roomId: payload.roomId,
            };
        default:
            return state;
    }
};

export default reducer;
