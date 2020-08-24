import React from 'react';
import { Table, Input, Button, Space } from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import originData from './db'

import './table.css'


class MyTable extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'name',
                dataIndex: 'name',
                width: '15%',
                editable: true,
                ...this.getColumnSearchProps.call(this, 'name')
            },
            {
                title: 'factory',
                dataIndex: 'factory',
                width: '25%',
                editable: true,
                ...this.getColumnSearchProps.call(this, 'factory')
            },
            {
                title: 'address',
                dataIndex: 'address',
                width: '30%',
                editable: true,
                ...this.getColumnSearchProps.call(this, 'address')
            },
            {
                title: 'advantage',
                dataIndex: 'advantage',
                editable: true,
            },
        ];
        return (
            <div className="tableBox">
                <Table 
                    columns={columns}
                    dataSource={originData}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.contacts}</p>,
                        rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                    bordered
                    title={() => '明洋金属供应商'}
                    pagination={{position: ['bottomCenter']}}
                />
            </div>
        );
    }
}


export default MyTable;