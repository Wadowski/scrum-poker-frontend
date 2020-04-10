import {
    CARD_UPDATE,
} from "./types";

export const updateChosenCard = (card) => ({
    type: CARD_UPDATE,
    payload: {
        card
    },
});
