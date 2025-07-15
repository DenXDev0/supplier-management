import React from 'react';
import { Table, Tag, Typography } from 'antd';
import type { TableProps } from 'antd';
import type { DataType } from './data';

const { Text } = Typography;

const SupplierTable: React.FC<{ data: DataType[] }> = ({ data }) => {
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'No',
      key: 'no',
      render: (_text, _record, index) => index + 1,
      width: 60,
    },
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => (
        <>
          <Text strong>{record.name}</Text><br />
          <Text type="secondary" style={{ fontSize: '0.85rem' }}>
            {record.code} [{record.alias}]
          </Text>
        </>
      ),
    },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'Active' ? 'green' : status === 'Blocked' ? 'volcano' : 'gold';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
  ];

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} rowKey="key" />;
};

export default SupplierTable;
