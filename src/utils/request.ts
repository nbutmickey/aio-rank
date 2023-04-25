/**
 * @file request
 * @author mickey.nbut@gmail.com
 */

import axios from 'axios';
import {omit} from 'lodash';
import qs from 'qs';
// import {stringMd5} from 'react-native-quick-md5';
// import base64 from 'react-native-base64';
// import {HOST} from 'env';

// const SALT = 'WhyNotAIO';
interface RequestTypes {
    url: string;
    method?: 'GET' | 'POST';
    params?: Record<string, any>;
    timeout?: number;
    // 是否需要验签
    authorization: boolean;
}
const defaultConfig = {
    // baseURL: HOST,
    baseURL: process.env.HOST || 'https://mock.apifox.cn/m1/2507514-0-default',
    timeout: 5000,
    withCredentials: true,
    method: 'GET',
    authorization: true,
};

export default function request(config: RequestTypes) {
    const method = config?.method || 'GET';
    let userConfig = config;
    userConfig = Object.assign(
        {},
        config,
        method === 'POST' ? {data: config.params} : {params: config.params},
    );
    if (method === 'POST') {
        userConfig = omit(userConfig, 'params');
    }
    const axiosConfig = Object.assign({}, defaultConfig, userConfig);
    const ins = axios.create(axiosConfig);

    ins.interceptors.request.use(config => {
        if (!config.headers['content-type']) {
            if (config.method === 'POST') {
                config.headers['content-type'] = 'application/json';
            } else {
                config.headers['content-type'] =
                    'application/x-www-form-urlencoded';
                config.data = qs.stringify(config.data);
            }
        }
        // 验签
        // const ts = parseInt(String(new Date().getTime() / 1000));
        // const paramsbase64 = base64.encode(JSON.stringify(config.data));
        // const signature = stringMd5(`${config.url}${ts}${paramsbase64}${SALT}`);

        // config.headers.authorization = `${ts}.${paramsbase64}.${signature}`;
        return config;
    });

    ins.interceptors.response.use(
        res => {
            return res.data.data;
        },
        err => {
            console.error('err ====> ', err);
        }
    );

    if (axiosConfig.method === 'GET') {
        return ins.get(axiosConfig.url, axiosConfig);
    } else {
        return ins.post(axiosConfig.url, axiosConfig);
    }
}
