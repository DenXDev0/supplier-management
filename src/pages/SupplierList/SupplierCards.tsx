import React from 'react';
import { Card, Flex } from 'antd';
import { cardData } from './data';

const SupplierCards: React.FC = () => (
  <Flex justify="center" wrap gap="middle">
    {cardData.map(({ title, value, icon, change }, i) => (
      <Card key={i} title={title} variant="borderless" style={{ width: 280 }} size="small">
        <Flex justify="space-between" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          {value} {icon}
        </Flex>
        <div>{change}</div>
      </Card>
    ))}
  </Flex>
);

export default SupplierCards;
