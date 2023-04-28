// 自选
import {useEffect, useState} from 'react';
import {Image} from '@douyinfe/semi-ui';
import star from '@components/Svg/NewStar.svg';
import starSelected from '@components/Svg/StarSelected.svg';
import empty from '@components/Svg/empty.png';
import request from '@/src/utils/request';
import API from '@/src/utils/api';
import InfoTable from '../InfoTable/InfoTable';
import {BillContext} from '../../../../pages/pc/market';

const sorter = (a: Token, b: Token, prop: keyof Token) => {
    return parseFloat(a[prop]) - parseFloat(b[prop]) > 0 ? 1 : -1;
};

const headerRenderer = (text: string, style: string, showCurrency: boolean = false) => {
    return (
        <BillContext.Consumer>
            {billType => (
                <div className={style}>
                    {text}{showCurrency ? billType === 'USD' ? '$' : '￥' : null}
                </div>
            )}
        </BillContext.Consumer>
    );
};

interface Token {
    index: number;
    token: string;
    name: string;
    icon: string;
    price: string;
    priceUS: string;
    '1H': string;
    '24H': string;
    '7D': string;
    volume: string;
    marketCap: string;
    tokenIcon: string;
    tokenPrice: string;
    marketCapFM: string;
    volumeFM: string;
  }

export const tokenColumns = (data: Token[], setData: React.SetStateAction<Token[]>) => {
    return (
        [
            {
                title: headerRenderer('币种', 'text-[#B4B1C1] font-[500] ml-10 text-[14px] my-[7px]'),
                dataIndex: 'token',
                width: 220,
                fixed: true,
                render: (text: string, record: Token) => (
                    <div className="flex flex-row ml-2">
                        <div
                            className="shrink-0 self-center cursor-pointer"
                            onClick={() => {
                                if (data.map(e => e.index).includes(record.index)) {
                                    setData(data.filter(e => e.index !== record.index));
                                } else {
                                    setData(data.concat(record));
                                }
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={data.map(e => e.index).includes(record.index) ? starSelected.src : star.src}
                                width={15}
                                alt=""
                            />
                        </div>
                        <Image src={record.icon} className="shrink-0 ml-4 h-[1.7rem] w-[1.7rem] self-center" />
                        <div className="font-[600] self-center ml-2">{text}</div>
                        <div className="text-[#656277] font-[500] text-[14px] self-center ml-2">{record.name}</div>
                    </div>
                ),
            },
            {
                title: headerRenderer('价格', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'price',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'price'),
                render: (text: string, record: Token) => (
                    <BillContext.Consumer>
                        {billType => (
                            <div className="flex flex-row justify-end">
                                <div className="flex flex-col">
                                    <div className="font-[600] self-center ml-2">{text}</div>
                                    {/* eslint-disable-next-line max-len */}
                                    <div className="text-[12px] text-[#656277]">{billType === 'USD' ? null : `$${record.priceUS}`}</div>
                                </div>
                            </div>
                        )}
                    </BillContext.Consumer>
                ),
            },
            {
                title: headerRenderer('1h', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '1H',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '1H'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('24h', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '24H',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '24H'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('7d', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '7D',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '7D'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('交易额', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'volume',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'volume'),
                render: (text: string, record: Token) => (
                    <BillContext.Consumer>
                        {billType => (
                            <div className="flex flex-row justify-end">
                                <div className="flex flex-col">
                                    <div className="font-[600] self-center ml-2">{text}</div>
                                    {/* eslint-disable-next-line max-len */}
                                    <div className="text-[12px] text-[#656277]">{billType === 'USD' ? null : `$${record.priceUS}`}</div>
                                </div>
                            </div>
                        )}
                    </BillContext.Consumer>
                ),
            },
            {
                title: headerRenderer('市值', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'marketCap',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'marketCap'),
                render: (text: string, record: Token) => (
                    <BillContext.Consumer>
                        {billType => (
                            <div className="flex flex-row justify-end">
                                <div className="flex flex-col">
                                    <div className="font-[600] self-center ml-2">{text}</div>
                                    {/* eslint-disable-next-line max-len */}
                                    <div className="text-[12px] text-[#656277]">{billType === 'USD' ? null : `$${record.priceUS}`}</div>
                                </div>
                            </div>
                        )}
                    </BillContext.Consumer>
                ),
            },
        ]
    );
};

const EmptyPage = () => {
    return (
        <div className="w-full h-full text-center flex flex-col">
            <img src={empty.src} alt="" className="w-[160px] h-[160px] self-center mt-[30vh]" />
            <div className="text-[#656277] mt-4">暂无自选, 请前往token和NFT板块添加自选项</div>
            <div
                className="bg-black px-3 py-3 rounded-3xl w-[150px] text-white self-center mt-6 cursor-pointer"
                onClick={() => {
                    window.location.href = '/pc/router?tab_key=2';
                }}
            >
                添加自选
            </div>
        </div>
    );
};

export const nftColumns = (data: Token[], setData: React.SetStateAction<Token[]>) => {
    return (
        [
            {
                title: headerRenderer('系列', 'text-[#B4B1C1] font-[500] text-[14px] ml-10'),
                dataIndex: 'token',
                width: 300,
                fixed: true,
                render: (text: string, record: Token) => (
                    <div className="flex flex-row ml-2 cursor-pointer">
                        <div
                            className="shrink-0 self-center cursor-pointer"
                            onClick={() => {
                                if (data.map(e => e.index).includes(record.index)) {
                                    setData(data.filter(e => e.index !== record.index));
                                } else {
                                    setData(data.concat(record));
                                }
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={data.map(e => e.index).includes(record.index) ? starSelected.src : star.src}
                                width={16}
                                height={16}
                            />
                        </div>
                        <Image src={record.icon} className="shrink-0 ml-4 h-[1.7rem] w-[1.7rem] self-center" />
                        <div className="font-[600] self-center ml-2">{text}</div>
                    </div>
                ),
            },
            {
                title: headerRenderer('价格', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'price',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'price'),
                render: (text: string, record: Token) => (
                    <div>
                        <div className="flex flex-row items-center justify-end">
                            <Image src={record.tokenIcon} className="h-[1rem] w-[1rem] shrink-0 self-center" />
                            <div className="font-[600] self-center ml-2">{text}</div>
                        </div>
                    </div>
                ),
            },
            {
                title: headerRenderer('1h', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '1H',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '1H'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('24h', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '24H',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '24H'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('7d', 'text-[#B4B1C1] font-[500] text-[14px]'),
                dataIndex: '7D',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, '7D'),
                render: (text: string) => (
                    // eslint-disable-next-line max-len
                    <div className={`font-[600] ${!text.startsWith('-') ? 'text-green-500' : 'text-red-500 font-medium'}`}>{text}</div>
                ),
            },
            {
                title: headerRenderer('交易额', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'volumeFM',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'volumeFM'),
                render: (text: string, record: Token) => (
                    <div>
                        <div className="flex flex-row justify-end">
                            <Image src={record.tokenIcon} className="h-[1rem] w-[1rem] self-center" />
                            <div className="font-[600] self-center ml-2">{text}</div>
                        </div>
                        <div className="font-[600]">{record.volume}</div>
                    </div>
                ),
            },
            {
                title: headerRenderer('市值', 'text-[#B4B1C1] font-[500] text-[14px]', true),
                dataIndex: 'marketCapFM',
                width: 200,
                align: 'right',
                sorter: (a: Token, b: Token) => sorter(a, b, 'marketCapFM'),
                render: (text: string, record: Token) => (
                    <div>
                        <div className="flex flex-row justify-end">
                            <Image src={record.tokenIcon} className="h-[1rem] w-[1rem] self-center" />
                            <div className="font-[600] self-center ml-2">{text}</div>
                        </div>
                        <div className="font-[600]">{record.marketCap}</div>
                    </div>
                ),
            },
        ]
    );
};

const TabPane1 = () => {
    const [TokenData, setTokenData] = useState([]);
    const [NFTData, setNFTData] = useState([]);

    useEffect(
        () => {
            request({
                url: API.MARKET_SELF_TOKEN,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setTokenData(res.list);
            });
            request({
                url: API.MARKET_SELF_NFT,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setNFTData(res.list);
            });
        },
        []
    );

    return (
        <div>
            {(TokenData.length !== 0 || NFTData.length !== 0)
                ? <div>
                    <InfoTable title="TOKEN" data={TokenData} columns={tokenColumns(TokenData, setTokenData)} />
                    <InfoTable title="NFT" data={NFTData} columns={nftColumns(NFTData, setNFTData)} />
                    {/* eslint-disable-next-line react/jsx-closing-tag-location */}
                </div>
                : <EmptyPage />
            }
        </div>
    );
};

export default TabPane1;
