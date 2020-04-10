import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext({ socket: null, namespaces: [] });

const SocketProvider = ({ children, url, options = {}, namespaces: namespacesProps = [] }) => {
    const [socket, makeSocket] = useState(null);
    const [namespaces, makeNamespaces] = useState([]);

    useEffect(() => {
        makeSocket(io(url, options));
        makeNamespaces(namespacesProps);
    }, []);

    return (
        <SocketContext.Provider value={{ socket, namespaces }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
export {
    SocketContext,
};
