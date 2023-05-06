
import type {AppProps} from 'next/app';
import {useEffect, useReducer} from 'react';
import '../styles/globals.css';
import {SelfSelectContext, selfSelectTokenReducer, selfSelectNFTReducer} from '../provider/selfSelect';
import request from '../utils/request';
import API from '../utils/api';

export default function App({Component, pageProps}: AppProps) {
    const [token, tokenDispatch] = useReducer(selfSelectTokenReducer, []);
    const [nft, nftDispatch] = useReducer(selfSelectNFTReducer, []);

    useEffect(() => {
        request({
            url: API.MARKET_SELF_TOKEN,
            method: 'GET',
            params: {},
            timeout: 5000,
            authorization: false,
        }).then(res => {
            tokenDispatch({
                type: 'init',
                list: res.list
            });
        });
        request({
            url: API.MARKET_SELF_NFT,
            method: 'GET',
            params: {},
            timeout: 5000,
            authorization: false,
        }).then(res => {
            nftDispatch({
                type: 'init',
                list: res.list
            });
        });
    }, []);

    return <SelfSelectContext.Provider value={{
        state: {
            token: token,
            nft: nft,
          },
          dispatch: {
            token: tokenDispatch,
            nft: nftDispatch,
          }
    }}>
        <Component {...pageProps} />
    </SelfSelectContext.Provider>;
}
