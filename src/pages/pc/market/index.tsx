import {Input, Modal, TabPane, Tabs} from '@douyinfe/semi-ui';
import {IconHome, IconTriangleDown} from '@douyinfe/semi-icons';
import {FC, createContext, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import TabPane1 from '../../../components/Pc/Market/TabPanes/TabPane1';
import TabPane2 from '../../../components/Pc/Market/TabPanes/TabPane2';
import TabPane3 from '../../../components/Pc/Market/TabPanes/TabPane3';
// import styles from './index.modules.less';

const mockBill = [
    {
        index: 0,
        bill: 'CNY',
        name: 'China RMB',
    },
    {
        index: 1,
        bill: 'USD',
        name: 'United State Dollar',
    },
    {
        index: 2,
        bill: 'USD2',
        name: 'United State Dollar',
    },
    {
        index: 3,
        bill: 'USD3',
        name: 'United State Dollar',
    },
    {
        index: 4,
        bill: 'USD4',
        name: 'United State Dollar',
    },
];


interface BillTypeChooseProps {
    setBillModal: (value: boolean) => void;
    billType: React.ReactNode;
  }

const BillTypeChoose: FC<BillTypeChooseProps> = ({setBillModal, billType}) => {
    return (
        <div
            // eslint-disable-next-line max-len
            className="self-end rounded-[15px] px-3 py-1 h-[30px] flex flex-row justify-center cursor-pointer border-[1px]"
            onClick={() => {setBillModal(true);}}
        >
            <div className="font-[500] text-[14px]">{billType}</div>
            <IconTriangleDown className="self-center ml-1" size="extra-small" />
        </div>
    );
};

interface BillCardProps {
    item: {
      name: string;
      bill: string;
    };
    setBill: () => void;
  }

const BillCard: FC<BillCardProps> = ({item, setBill}) => {
    return (
        <div
            className="flex flex-row h-[3.5rem] px-3 mt-5 mr-4 hover:bg-gray-200 rounded-lg cursor-pointer"
            onClick={setBill}
        >
            <div className="self-center">
                <IconHome size="extra-large" className="" />
            </div>
            <div className="self-center ml-2">
                <div className="font-bold">{item.name}</div>
                <div className="text-xs text-gray-500">{item.bill}</div>
            </div>
        </div>
    );
};

export const BillContext = createContext('CNY');

const MarketIndex = () => {
    const [BillModal, setBillModal] = useState(false);
    const [billType, setBilltype] = useState('CNY');
    const [currentKey, setCurrentKey] = useState('0'); // 1：自选；2：TOKEN；3：NFT
    const location = useRouter();

    useEffect(
        () => {
            if (typeof (location.query.tab_key) === 'string') {
                setCurrentKey(location.query.tab_key);
            }
        },
        [location.query.tab_key]
    );

    return (
        <BillContext.Provider value={billType}>
            <div className="py-7 px-8 h-full w-full">
                <Tabs
                    defaultActiveKey="1"
                    activeKey={currentKey}
                    onChange={e => {setCurrentKey(e);}}
                    type="card"
                    renderTabBar={(tabBarProps, DefaultTabBar) => {
                        return (
                            <div className="flex flex-row justify-between">
                                <DefaultTabBar {...tabBarProps} />
                                <BillTypeChoose setBillModal={setBillModal} billType={billType} />
                            </div>
                        );
                    }}
                >
                    <TabPane tab="自选" itemKey="1">
                        <TabPane1 />
                    </TabPane>
                    <TabPane tab="TOKEN" itemKey="2">
                        <TabPane2 />
                    </TabPane>
                    <TabPane tab="NFT" itemKey="3">
                        <TabPane3 />
                    </TabPane>
                </Tabs>
                <Modal
                    style={{position: 'relative', left: '150px'}}
                    width={'70%'}
                    visible={BillModal}
                    footer={null}
                    onCancel={() => {setBillModal(false);}}
                >
                    <div className="w-full">
                        <div className="w-full">
                            <div className="text-gray-500 mt-6">热门货币</div>
                            <div className="grid grid-cols-4 w-full px-4">
                                {mockBill.map(item => (
                                    <BillCard
                                        key={item.index}
                                        item={item}
                                        setBill={() => {setBilltype(item.bill); setBillModal(false);}}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="text-gray-500 mt-6">法定货币</div>
                            <div className="grid grid-cols-4 w-full px-4">
                                {mockBill.map(item => (
                                    <BillCard
                                        key={item.index}
                                        item={item}
                                        setBill={() => {setBilltype(item.bill); setBillModal(false);}}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </BillContext.Provider>
    );
};

export default MarketIndex;
