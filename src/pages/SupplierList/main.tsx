import React, { useState } from 'react';
import { Flex, Button, Input, Select, Space } from 'antd';
import { FaUser, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import SupplierCards from './SupplierCards';
import SupplierTable from './SupplierTable';
import NewSupplierModal from './NewSupplierModal';
import { fullData } from './data';

const { Search } = Input;

const SupplierList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | undefined>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const filteredData = fullData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchStatus = statusFilter === 'all' || item.status.toLowerCase() === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="container">
      <Flex justify="space-between" align="center" style={{ marginBottom: 15 }}>
        <h2>Supplier List</h2>
        <Button type="primary" size="large" icon={<FaUser />} onClick={showModal}>
          New Supplier
        </Button>
      </Flex>

      <SupplierCards />

      <Flex justify="space-between" align="center" style={{ margin: '2rem 0' }}>
        <Space>
          <Search
            size="large"
            placeholder="Search supplier name"
            allowClear
            style={{ width: 280 }}
            onSearch={(value) => setSearchText(value)}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            defaultValue="all"
            size="large"
            style={{ width: 150 }}
            onChange={(value) => setStatusFilter(value)}
            options={[
              { value: 'all', label: 'All Status' },
              { value: 'active', label: 'Active' },
              { value: 'in progress', label: 'In Progress' },
              { value: 'blocked', label: 'Blocked' },
            ]}
          />
        </Space>
        <Space gap={10} align="center">
          <Button type="primary" size="large" icon={<FaArrowUpRightFromSquare />}>Export</Button>
          <BsGrid3X3GapFill size={35} />
          <AiOutlineMenu size={35} />
        </Space>
      </Flex>

      <SupplierTable data={filteredData} />
      <NewSupplierModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
    </div>
  );
};

export default SupplierList;
