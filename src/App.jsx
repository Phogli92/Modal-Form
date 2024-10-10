import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table } from 'antd';
import './App.css';
import Moda from './Moda';

function App() {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['dataKey'],
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos'),
    });

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'id',
        },
        {
            title: 'User Id',
            dataIndex: 'id',
            key: 'id',
        },
    ];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <>
            <Table
                columns={columns}
                dataSource={data?.data}
                rowKey="id"
            />
            <Moda></Moda>
        </>
    );
}

export default App;
