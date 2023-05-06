import {Table, Input} from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import {Dispatch, FC, SetStateAction, useEffect, useMemo, useRef, useState} from 'react';
import fuzzySearch from '../search';
import styles from './index.module.less';
import { ChangeInfoSorter, TablePaginationProps } from '@douyinfe/semi-ui/lib/es/table/interface';
import request from '@/src/utils/request';

interface InfoTableProps {
    title: React.ReactNode;
    columns: (onClick: Dispatch<SetStateAction<any[]>>) => any[];
    api: string;
    needPagination?: boolean;
}

const InfoTable: FC<InfoTableProps> = ({title, columns, api, needPagination = true}) => {
    const [dataSource, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const orderRef = useRef<{
        order?: string | undefined,
        desc?: number | undefined
    }>({})

    const scroll = useMemo(() => ({y: '70vh', x: 'max-content'}), []);

    const handleChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void = (value, e) => {
        if (value === '') {
            fetchData()
        } else {
            setData(fuzzySearch(value, dataSource));
        }
    };

    const fetchData = async (currentPage = 1) => {
        setLoading(true);
        setPage(currentPage);
        try {
            const { order, desc } = orderRef.current
            const res = await request({
                url: api,
                method: 'GET',
                params: {
                    page: currentPage,
                    size: 10,
                    order,
                    desc,
                },
                timeout: 5000,
                authorization: false,
            })
            let { list, total } = res

            if (needPagination === false) {
                list = (list ?? []).map((e) => ({...e, starred: true}))
            }
            setData(list);
            setTotal(total);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page: number) => {
        fetchData(page);
    };

    useEffect(() => {
        fetchData();
    }, [api]);

    const onChange = (info: { pagination?: TablePaginationProps, sorter?: ChangeInfoSorter<any> }) => {
        const { dataIndex, sortOrder } = info.sorter ?? {}

        if (sortOrder === false) {
            orderRef.current = {}
        } else {
            orderRef.current = {
                order: dataIndex,
                desc: sortOrder === 'descend' ? 1 : 0
            }
        }
        fetchData();
    }

    return (
        <div>
            <div className="w-full flex flex-row justify-between my-4 ">
                <div className="text-xl font-[500] self-center" style={{
                    width: 'calc(100% - 266px)',
                }}>{title}</div>
                <Input
                    className={`${styles.searchBox} shrink-0`}
                    style={{
                        borderRadius: 9999,
                    }}
                    id="search"
                    showClear
                    placeholder="search for content"
                    suffix={<IconSearch />}
                    onChange={handleChange}
                />
            </div>
            <hr />
            <div>
                <Table
                    loading={loading}
                    style={{
                        '--semi-color-shadow': 'translate',
                    }}
                    pagination={needPagination && {
                        currentPage,
                        pageSize: 10,
                        total: total,
                        onPageChange: handlePageChange,
                    }}
                    columns={columns(setData)}
                    dataSource={dataSource}
                    scroll={scroll}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};


export default InfoTable;
