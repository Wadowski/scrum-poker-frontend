import {
    CARD_VALUE_UPDATE,
    UPDATE_ROOM_ID,
} from "./types";

export const updateChosenCard = (cardValue) => ({
    type: CARD_VALUE_UPDATE,
    payload: {
        cardValue
    },
});

export const updateRoomId = (roomId) => ({
    type: UPDATE_ROOM_ID,
    payload: {
        roomId,
    },
});
