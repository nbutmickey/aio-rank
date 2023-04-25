import React, {useEffect, useState} from 'react';
import {Nav} from '@douyinfe/semi-ui';
import logo from '@components/Svg/Logo.png';
import home from '@components/Svg/Home.svg';
import homeSelected from '@components/Svg/HomeSelected.svg';
import my from '@components/Svg/My.svg';
import mySelected from '@components/Svg/MySelected.svg';
import market from '@components/Svg/Market.svg';
import marketSelected from '@components/Svg/MarketSelected.svg';
import focus from '@components/Svg/Focus.svg';
import focusSelected from '@components/Svg/FocusSelected.svg';
import {useRouter} from 'next/router';
import MarketIndex from '../market';
interface Item {
    itemKey: string;
    text: string;
    icon: string;
    iconSelected: string;
  }

const items: Item[] = [
    {itemKey: 'home', text: '首页', icon: home, iconSelected: homeSelected},
    {itemKey: 'subscribe', text: '关注', icon: focus, iconSelected: focusSelected},
    {itemKey: 'market', text: '行情', icon: market, iconSelected: marketSelected},
    {itemKey: 'my', text: '我的', icon: my, iconSelected: mySelected},
];

const Index: React.FC = () => {
    const [nav, setNav] = useState<string>('market');
    const location = useRouter();

    useEffect(
        () => {
            if (typeof location.query.nav === 'string') {
                setNav(location.query.nav);
            }
        },
        [location.query.nav]
    );

    const renderMap: { [key: string]: JSX.Element } = {
        market: <MarketIndex />,
    };

    return (
        <div className="flex flex-row h-screen w-screen">
            <Nav
                className="h-full min-w-[150px] md:min-w-[19%] fixed"
                bodyStyle={{height: 320}}
                onSelect={data => setNav(data.itemKey)}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Nav.Header text={<img src={logo.src} alt="" />} className="my-5 mx-8 mb-[-10px]" />
                {items.map(item => (
                    <Nav.Item
                        key={item.itemKey}
                        // eslint-disable-next-line @next/next/no-img-element
                        icon={<img src={nav === item.itemKey ? item.iconSelected.src : item.icon.src} alt="" />}
                        className={`!font-medium mx-8 !mb-[14px] !text-[20px] ${
                            nav === item.itemKey ? '!text-black !font-bold' : '!text-gray-500'
                        }`}
                        itemKey={item.itemKey}
                        text={item.text}
                    />
                ))}
            </Nav>
            {renderMap[nav]}
        </div>
    );
};

export default Index;
