// NFT
import React, {useEffect, useState} from 'react';
import {Modal} from '@douyinfe/semi-ui';
import {DndContext} from '@dnd-kit/core';
import API from '@/src/utils/api';
import request from '@/src/utils/request';
import InfoTable from '../InfoTable/InfoTable';
import DndList from '../DndList/DndList';
import {nftColumns} from './TabPane1';
import {BlockList} from './TabPane2';

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

const TabPane3 = () => {
    const [NFTData, setNFTData] = useState([]);
    const [myNFT, setMyNFT] = useState([]);

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
                url: API.MARKET_NFT,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setNFTData(res.list);
            });
            request({
                url: API.MARKET_SELF_NFT,
                method: 'GET',
                params: {},
                timeout: 5000,
                authorization: false,
            }).then(res => {
                setMyNFT(res.list);
            });
        },
        []
    );

    return (
        <div>
            <InfoTable
                title={<BlockList data={block} current={current} setCurrent={setCurrent} setModal={setBlockModal} />}
                data={NFTData}
                columns={nftColumns(myNFT, setMyNFT)}
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
                            <DndList data={block} setAddBlock={setBlock} onClickHandler={handleDelete} />
                        </div>
                        <div>
                            <div className="my-6 font-bold">板块推荐</div>
                            <DndList data={addBlock} setAddBlock={setAddBlock} onClickHandler={handleAdd} />
                        </div>
                    </DndContext>
                </div>
            </Modal>
        </div>
    );
};

export default TabPane3;
