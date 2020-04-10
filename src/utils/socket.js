export const getSocketConnection = ({ socket, namespaces }) => (namespace) => {
    if (namespace && namespaces && namespaces[namespace]) {
        return namespaces[namespace];
    }

    return socket;
};
