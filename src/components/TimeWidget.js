import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TimeWidget = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            setIsNight(now.getHours() >= 17 || now.getHours() < 6);
            // setIsNight(true);
        }, 1000); // Update every 1 second
        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        const daysInTurkish = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'C']; // Turkish abbreviations for days of the week
        const monthsInTurkish = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']; // Turkish abbreviations for months
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dayOfWeek = daysInTurkish[date.getDay()];
    
        return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}\n${formatTime(date)}\n${dayOfWeek}`;
    };

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    };

    const backgroundImage = isNight ? require("../images/night.jpg") : require("../images/day.jpg");

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={backgroundImage}
                style={styles.backgroundImage}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{formatDate(currentTime)}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2544',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 40,
        overflow: 'hidden',
    },
    header: {
        flex: 1,
        backgroundColor: 'rgba(110, 110, 130, 0.1)', // Purple overlay
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
});

export default TimeWidget;
