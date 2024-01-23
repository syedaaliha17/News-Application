import React, { useEffect } from 'react'
import axios from 'axios';
import { View, Text } from 'react-native';
import { useState } from 'react';
import CardOne from './CardOne';

const Weather = () => {

    const [ weather, setWeather ] = useState([]);
    useEffect = () => {
        const options = {
            method: 'GET',
            url: 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D',
            params: {
                units: 'auto',
                lang: 'en'
            },
            headers: {
                'X-RapidAPI-Key': 'b92aa92f62mshf474440ba486133p10fe1djsnfb4fe8f4f08c',
                'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
            }
        };

        try {
            const response = axios.request(options);
            console.log(response.data);
            setWeather(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View>
            <Text style={{ color: "black" }}>Weather</Text>
            <CardOne/>
        </View>

    )
}

export default Weather
