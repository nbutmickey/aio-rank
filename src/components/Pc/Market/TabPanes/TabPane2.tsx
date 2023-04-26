// TOKEN
import React, {FC, useEffect, useState} from 'react';
import {Modal} from '@douyinfe/semi-ui';
import {IconHome} from '@douyinfe/semi-icons';
import {DndContext} from '@dnd-kit/core';
import request from '@/src/utils/request';
import API from '@/src/utils/api';
import InfoTable from '../InfoTable/InfoTable';
import DndList from '../DndList/DndList';
import {tokenColumns} from './TabPane1';

const mockBlock = [
    'Block_1',
    'Block_2',
    'Block_3',
    'Block_4',
    'Block_5',
    'Block_6',
    'Block_7',
];

const mockAddBlock = [
    'Block_8',
    'Block_9',
    'Block_10',
    'Block_11',
    'Block_12',
    'Block_13',
    'Block_14',
];

interface BlockProps {
    data: string[];
    current: string;
    setCurrent: React.Dispatch<React.SetStateAction<string>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const BlockList: FC<BlockProps> = ({data, current, setCurrent, setModal}) => {
    return (
        <div className="flex flex-row">
            {data.map(item => (
                <div
                    key={item}
                    onClick={() => {setCurrent(item);}}
                    className={`
                    rounded-3xl border-[1px] border-[#E9ECF2] px-3 py-[1px] font-normal text-[14px] mr-2 cursor-pointer
                    ${current === item ? 'bg-black text-white' : ''}
                `}
                >
                    {item}
                </div>
            ))}
            <div
                onClick={() => {setModal(true);}}
                className={`
                rounded-3xl border-[1px] border-[#E9ECF2] px-4 mr-2 cursor-pointer flex flex-col justify-center
            `}
            >
                +
            </div>
        </div>
    );
};

interface CardProps {
    item: string;
    operationText: string;
  }

export const Card: FC<CardProps> = ({item, operationText}) => {
    return (
        // eslint-disable-next-line max-len
        <div className="flex flex-row h-[3rem] px-3 mx-4 bg-gray-200 hover:bg-gray-100 rounded-lg cursor-pointer justify-between">
            <div className="flex flex-row">
                <div className="self-center">
                    <IconHome size="extra-large" className="" />
                </div>
                <div className="self-center ml-2">
                    <div className="font-bold">{item}</div>
                </div>
            </div>
            <div className="font-semibold text-lg self-center">
                {operationText}
            </div>
        </div>
    );
};

const TabPane2 = () => {
    const [TokenData, setTokenData] = useState([]);
    const [myToken, setMyToken] = useState([]);

    const [block, setBlock] = useState(mockBlock);
    const [addBlock, setAddBlock] = useState(mockAddBlock);
    const [blockModal, setBlockModal] = useState(false);
    const [current, setCurrent] = useState('Block_1'); // current block

    const handleAdd = (item: string) => {
        if (!block.includes(item)) {
            setBlock(block.concat(item));
            setAddBlock(addBlock.filter(e => e !== item));
        }
    };
    const handleDelete = (item: string) => {
        if (!addBlock.includes(item)) {
            setAddBlock(addBlock.concat(item));
            setBlock(block.filter(e => e !== item));
        }
    };

    useEffect(
        () => {
            request({
                url: API.MARKET_TOKEN,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setTokenData(res.list);
            });
            request({
                url: API.MARKET_SELF_TOKEN,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setMyToken(res.list);
            });
        },
        []
    );

    return (
        <div>
            <InfoTable
                title={<BlockList data={block} current={current} setCurrent={setCurrent} setModal={setBlockModal} />}
                data={TokenData}
                columns={tokenColumns(myToken, setMyToken)}
            />
            <Modal
                style={{position: 'relative', left: '150px'}}
                width={'70%'}
                visible={blockModal}
                footer={null}
                onCancel={() => {setBlockModal(false);}}
            >
                <div className="w-full">
                    <DndContext>
                        <div className="text-xl font-bold">板块管理</div>
                        <div className="w-full">
                            <div className="flex flex-row my-6">
                                <div className="self-end font-bold">板块自选</div>
                                <div className=" text-xs text-gray-400 self-end ml-2">
                                    {'长按拖动板块，调整顺序（固定板块不可修改）'}
                                </div>
                            </div>
                            <DndList data={block} setAddBlock={setBlock} onClickHandler={handleDelete} operationText='-' />
                        </div>
                        <div>
                            <div className="my-6 font-bold">板块推荐</div>
                            <DndList data={addBlock} setAddBlock={setAddBlock} onClickHandler={handleAdd} operationText='+' />
                        </div>
                    </DndContext>
                </div>
            </Modal>
        </div>
    );
};

export default TabPane2;
