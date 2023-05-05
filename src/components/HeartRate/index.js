import React from 'react';
import { Table } from 'antd';
// import styles from './Attendance.module.css'

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      destination: '10 Downing Street',
      device_no: '001',
      isIn: 'Yes',
      IsDeviceUsed: 'No'
    },
    {
      key: '2',
      name: 'John',
      destination: '10 Downing Street',
      device_no: '001',
      isIn: 'No',
      IsDeviceUsed: 'Yes'
    },
  ];
  
  const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Device No.',
        dataIndex: 'device_no',
        key: 'device_no',
    },
    {
        title: 'Destination',
        dataIndex: 'destination',
        key: 'destination',
    },
    {
        title: 'Is In',
        dataIndex: 'isIn',
        key: 'isIn',
    },
    {
        title: 'Is Device Used',
        dataIndex: 'IsDeviceUsed',
        key: 'IsDeviceUsed',
    },
    {
        title: 'Approved',
    },
  ];

export default function HeartRate() {
    return (
        <Table dataSource={dataSource} columns={columns} /> 
    );
};
