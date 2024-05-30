import {createContext, useEffect, useState} from 'react';
import {socket} from "../socket";

export const AppContext = createContext({
    isConnected: false,
    loadingData: {isLoading: false, loadingText: ''},
    setLoadingData: () => null

});
export const AppProvider = ({children}: {
    children: React.ReactNode
}) => {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [loadingData, setLoadingData] = useState<{isLoading: boolean, loadingText?: string}>({isLoading: false, loadingText: ''})

    const onConnect = () => {
        console.log(socket?.id)
        setLoadingData({isLoading: false, loadingText: ''});

    }
    const onDisconnect = () => {
        setIsConnected(false);
    }
    const onReceiveUsers = () => {
    }

    useEffect(() => {
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('receiveUsers', onReceiveUsers);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('receiveUsers', () => null);
            socket.emit('onDisconnect', socket?.id)
        };
    }, []);

    return (
        // @ts-ignore
        <AppContext.Provider value={{isConnected: socket.connected, loadingData, setLoadingData}}>
            {children}
        </AppContext.Provider>
    );
}