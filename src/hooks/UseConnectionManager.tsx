import {useContext} from 'react';
import { socket } from "../socket";
import {AppContext} from "../providers/appProvider";

const UseConnectionManager = () => {
    const context: any = useContext(AppContext)
    const connect = () => {
        context?.setLoadingData({isLoading: true, loadingText: 'Connecting'})
        socket.connect();
    }

    const disconnect = () => {
        context?.showLoading(false)
        socket.disconnect();
    }

    return {connect, disconnect, isConnected: context.isConnected};
}

export default UseConnectionManager;