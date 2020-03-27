import { useContext } from 'react';
import { SocketContext } from "../components/SocketProvider";

export const useSocket = () => useContext(SocketContext);
export default useSocket;

