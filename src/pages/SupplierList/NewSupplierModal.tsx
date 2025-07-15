import React from 'react';
import { Modal, Form, Input, Row, Col, Upload, Button, Tabs, Table, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const NewSupplierModal: React.FC<{
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}> = ({ open, onOk, onCancel }) => {
  return (
    <Modal title="New Supplier" open={open} onOk={onOk} onCancel={onCancel} width={800}>
      <Row gutter={20}>
        <Col span={6}>
          <Form.Item layout="vertical" label="Logo">
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        </Col>

        <Col span={18}>
          <Form.Item label="Supplier Name" layout="vertical" required>
            <Input placeholder="Enter supplier name" />
          </Form.Item>
          <Form.Item label="Nick Name" layout="vertical" required>
            <Input placeholder="Enter nickname" />
          </Form.Item>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Address" key="1">
          <Table
            size="small"
            dataSource={[
              { key: '1', name: 'Head Office', address: 'Fatmawati Raya St, 123', main: true },
              { key: '2', name: 'Branch Office', address: 'Ciawi , 99', main: false },
            ]}
            pagination={false}
            columns={[
              { title: '+', dataIndex: 'select', key: 'select', width: 50 },
              { title: 'Name', dataIndex: 'name', key: 'name' },
              { title: 'Address', dataIndex: 'address', key: 'address' },
              {
                title: 'Main',
                dataIndex: 'main',
                key: 'main',
                render: (main: boolean) => <Checkbox checked={main} disabled />,
                width: 80,
              },
            ]}
          />
        </TabPane>
        <TabPane tab="Contacts" key="2"><p>Contacts form goes here.</p></TabPane>
        <TabPane tab="Groups" key="3"><p>Groups form goes here.</p></TabPane>
        <TabPane tab="Material" key="4"><p>Material information goes here.</p></TabPane>
        <TabPane tab="List" key="5"><p>List info goes here.</p></TabPane>
        <TabPane tab="Others" key="6"><p>Other settings go here.</p></TabPane>
      </Tabs>
    </Modal>
  );
};

export default NewSupplierModal;
