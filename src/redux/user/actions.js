import {
    USER_DETAILS_UPDATE,
} from "./types";

export const updateUserDetails = (user) => ({
    type: USER_DETAILS_UPDATE,
    payload: {
        user,
    },
});
