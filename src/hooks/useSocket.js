import { useContext } from 'react';

import { SocketContext } from "../components/SocketProvider";
import { getSocketConnection } from "../utils/socket";

export const useSocket = (namespace = null) => getSocketConnection(useContext(SocketContext))(namespace);
export default useSocket;

