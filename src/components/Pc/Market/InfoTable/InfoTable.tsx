import {Table} from '@douyinfe/semi-ui';
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

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        if (e.target.value === '') {
            setData(data); // reset
        } else {
            setData(fuzzySearch(e.target.value, data));
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
                <div className="text-xl font-[500] self-center">{title}</div>
                <input
                    className={styles.searchBox}
                    id="search"
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
