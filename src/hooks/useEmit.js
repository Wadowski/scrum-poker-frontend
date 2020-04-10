import { useContext } from 'react';

import { SocketContext } from "../components/SocketProvider";
import { getSocketConnection } from "../utils/socket";

const emitEvent = (socketConnection) => (eventName, ...eventData) =>
        socketConnection.emit(eventName, ...eventData);

const compressEvent = (socketConnection) =>
    socketConnection.compress(true);

export const useEmit = (options = {}) => {
    const socket = getSocketConnection(useContext(SocketContext))(options.namespace);

    if (socket) {
        if (options.compress) {
            return emitEvent(compressEvent(socket));
        }

        return emitEvent(socket);
    }

    return () => {
        console.log('emit used on non initialized socket');
        return { error: true };
    };
};
