import React from 'react';
import { Table, Input, Button, Space, PageHeader } from 'antd';

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
                <div className="header">
                    <span className="title">BAOLF STEEL</span>
                    <span className="subTitle">Supplier inquiry system</span>
                </div>
                <Table 
                    columns={columns}
                    dataSource={originData}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.contacts}</p>,
                        rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                    bordered
                    pagination={
                        {
                            position: ['bottomCenter'],
                            defaultPageSize: 10,
                            pageSizeOptions: [6, 7, 8, 10, 20 ,50, 100],
                            showQuickJumper: true
                        }
                    }
                    // scroll={{ y: 400 }}
                />
                <footer>
                    <div className="footer">
                        <div>CopyRight 2020 All Right Reserved Tianjin Baolf Steel Co.,Limited&nbsp;</div>
                        <div>Add: North of Fuyuan Road Wuqing Industrial Zone Tianjin China &nbsp;Tel: +86-22-29353313 &nbsp;Fax: +86-22-29353313&nbsp;</div>
                    </div>
                </footer>
            </div>
            
        );
    }
}


export default MyTable;