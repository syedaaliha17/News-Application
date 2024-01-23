import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,FlatList } from 'react-native';
import axios from 'axios';
import { CardOner } from '.';

const SportsPage = () => {
    // const [sportsData, setSportsData] = useState([]);

    // useEffect(() => {
    //     // Fetch sports data from API
    //     const fetchSportsData = async () => {
    //         try {
    //             const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=056dcfb15e1e4c8cac56a7981e52ba9f');
    //             setSportsData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchSportsData();
    // }, []);

    return (
        <ScrollView styles={styles.container} horizontal>
            <Text style={styles.title}>Sports</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                renderItem={({ sports }) => {
                    return (
                        <CardOne
                            image={sports.imageUrl}
                            title={sports.title}
                        />
                    );
                }}
            />
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "black"
    },
});

export default SportsPage;
