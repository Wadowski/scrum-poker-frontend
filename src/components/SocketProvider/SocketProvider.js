import React, { createContext } from 'react';
import io from 'socket.io-client';

// const SOCKET_URL = 'https://cbs-scrum-poker-server.herokuapp.com';
const SOCKET_URL = 'http://localhost:4101';
const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    const socket = io(SOCKET_URL);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
export {
    SocketContext,
};
