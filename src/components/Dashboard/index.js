import React, { useEffect } from 'react';
import axios from 'axios';

import { Card, Col, Row } from 'antd';
import styles from './Dashboard.module.css'

import {
    EnvironmentOutlined,
} from '@ant-design/icons';

const weather = {
    date: 'April 29,2023',
    location: 'Calamba City Laguna',
    degree: 36,
    category: 'Sunny'
}

const heartRate = {
    currentRate: 91,
    prevRate: 88,
    time: 3,
}

const bodyTemperature = {
    currentTemperature: 37,
    prevTemperature: 38,
    time: 30,
}

const device = {
    id: '001',
    isOn: 'true',
    lastStatus: 'OFF 1m ago'
}

const location = {
    destination: 'Barangay Turbina, Calamba City, Laguna'
}

const api = {
    // https://api.weatherbit.io/v2.0/current?lat=14.1513&lon=121.1386&key=95de754f1de1452ab356be5dff93578c&include=minutely
    key: "95de754f1de1452ab356be5dff93578c",
    base: "https://api.weatherbit.io/v2.0/",
    long: '121.13480571827556',
    lat: '14.148759449444478'
  };

const apiURL = {
    base: 'https://api.openweathermap.org/data/2.5/weather',
    key: 'ff0bf87aaa59c081ef75440b535ea4b4',
    city: 'makiling'

}

export default function Dashboard() {

    useEffect(() => {
        const WeatherBit = () => {
            fetch(`${api.base}current?lat=${api.lat}&lon=${api.long}&key=${api.key}`)
              .then((res) => res.json())
              .then((result) => {
                console.log("weatherBit:", result)
              });
          };

          const OpenWeather = () => {

              fetch(`${apiURL.base}?q=${apiURL.city}&appId=${apiURL.key}&unit=metric`)
              .then((res) => res.json())
              .then((result) => {
                console.log("OpenWeather:", result)
              });
          };

          const fetchData = async () => {
            const response = await axios.get('https://armband.vercel.app/dashboard/temp');
            console.log(response.data);
          };
        
          fetchData();

          OpenWeather();
          WeatherBit();
    },[])
    return (
    <>
        <Row gutter={16} className={styles.row} >
            <Col span={8}>
                <h1>Weather</h1>
                <Card title={weather.date} className={styles.card}>
                    <p>{weather.degree}&#176; C</p>
                    <p>{weather.category}</p>
                    <p>{weather.location}</p>
                </Card>
            </Col>
            <Col span={8}>
                <h1>Heart Rate</h1>
                <Card title="Current"  className={styles.card}>
                    <p>{heartRate.currentRate} BPM</p>
                    <p>{heartRate.prevRate} BMP, {heartRate.time}m ago</p>
                </Card>
            </Col>
            <Col span={8}>
                <h1>Body Temperature</h1>
                <Card title="Current"  className={styles.card}>
                    <p>{bodyTemperature.currentTemperature} &#176;</p>
                    <p>{bodyTemperature.prevTemperature}&#176; , {bodyTemperature.time}m ago</p>
                </Card>
            </Col>
        </Row>
        <Row gutter={16} className={styles.row}>
            <Col span={12}>
                <h1>Device Status</h1>
                <Card title="Your device is used" className={styles.card}>
                    <p>{device.isOn}</p>
                    <p>{device.lastStatus}</p>
                </Card>
            </Col>
            <Col span={12}>
                <h1>Location</h1>
                <Card title="Current Location" className={styles.card}>
                    <p><EnvironmentOutlined /></p>
                    <p>{location.destination}</p>
                </Card>
            </Col>
        </Row>
</>
    );
};
