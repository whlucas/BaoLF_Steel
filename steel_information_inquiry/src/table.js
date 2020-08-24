import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space, message } from 'antd';

import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

import './table.css'

const originData = [
    {
        key: '0',
        name: 'Edward King',
        factory: 'BaoLF',
        address: 'London, Park Lane no. 0',
        contacts: 'Allen Cao',
        phone: '12345',
        advantage: '巨大优势'
    },
    {
        key: '1',
        name: 'Edward King',
        factory: 'BaoLF',
        address: 'London, Park Lane no. 0',
        contacts: 'Allen Cao',
        phone: '12345',
        advantage: '巨大优势'
    },
];

// 增删改部分
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                    children
                )}
        </td>
    );
};

const MyTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [count, setCount] = useState(2); 
    const [editingKey, setEditingKey] = useState('');
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const isEditing = record => record.key === editingKey;

    const edit = record => {
        form.setFieldsValue({
            name: '',
            factory: '',
            address: '',
            contacts: '',
            phone: '',
            advantage: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async key => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const info = () => {
        message.info('重置搜索条件以显示所有结果');
    };

    const handleAdd = () => {
        if (searchText) {
            info()
        }
        const newData = {
            key: count,
            name: 'Edward King',
            factory: 'BaoLF',
            address: 'London, Park Lane no. 0',
            contacts: 'Allen Cao',
            phone: '12345',
            advantage: '巨大优势'
        };
        setData([...data, newData])
        setCount(count + 1)
    };

    const handleDelete = key => {
        const dataSource = data
        setData(dataSource.filter(item => item.key !== key))
    };



    // 搜索部分
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
          </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
          </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                    text
                ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex)
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('');
    };




    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
            ...getColumnSearchProps.call(this,'name')
        },
        {
            title: 'factory',
            dataIndex: 'factory',
            width: '20%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '25%',
            editable: true,
        },
        {
            title: 'contacts',
            dataIndex: 'contacts',
            width: '10%',
            editable: true,
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            width: '20%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                        <Space size="middle">
                            <span>
                                <a
                                    href="javascript:;"
                                    onClick={() => save(record.key)}
                                    style={{
                                        marginRight: 8,
                                    }}
                                >
                                    Save
                                </a>
                                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span>
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                <a>Delete</a>
                            </Popconfirm>
                        </Space>
                    ) : (
                            <Space size="middle">
                                <a disabled={editingKey !== ''} onClick={() => edit(record)}>
                                    Edit
                                </a>
                                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                    <a>Delete</a>
                                </Popconfirm>
                            </Space>
                        )
            },
        },
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a row
            </Button>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.advantage}</p>,
                        rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                />
            </Form>
        </div>
    );
};

export default MyTable;