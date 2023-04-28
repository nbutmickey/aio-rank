import {Table, Input} from '@douyinfe/semi-ui';
import {ChangeEventHandler, FC, SetStateAction, useEffect, useMemo, useState} from 'react';
import fuzzySearch from '../search';
import styles from './index.module.less';

interface InfoTableProps {
    title: React.ReactNode;
    columns: any[];
    data: SetStateAction<never[]>;
}

const InfoTable: FC<InfoTableProps> = ({title, columns, data}) => {
    const [tempData, setData] = useState([]);

    const scroll = useMemo(
        () => ({y: '70vh'}),
        []
    );

    const handleChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void = (value, e) => {
        if (value === '') {
            setData(data); // reset
        } else {
            setData(fuzzySearch(value, data));
        }
    };

    useEffect(
        () => {
            setData(data);
        },
        [data]
    );

    return (
        <div>
            <div className="w-full flex flex-row justify-between my-4 ">
                <div className="text-xl font-[500] self-center" style={{
                    width: 'calc(100% - 266px)',
                }}>{title}</div>
                <Input
                    className={`${styles.searchBox} shrink-0`}
                    id="search"
                    showClear
                    placeholder="search for content"
                    onChange={handleChange}
                />
            </div>
            <hr />
            <div>
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={tempData}
                    scroll={scroll}
                />
            </div>
        </div>
    );
};


export default InfoTable;
