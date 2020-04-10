import {
    UPDATE_ROOM,
} from "./types";

export const updateRoom = (room) => ({
    type: UPDATE_ROOM,
    payload: {
        room,
    },
});
