import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const TimeWidget = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1 saniye aralıklarla güncelle
        return () => clearInterval(intervalId);
    }, []);

    const timeString = currentTime.toTimeString();
    const trimmedTimeString = timeString.replace(/GMT.*/, '');

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("../images/flower.webp")}
                style={styles.backgroundImage}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{currentTime.toDateString()}</Text>
                    <Text style={styles.headerText}>{trimmedTimeString}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    header: {
        flex: 1,
        backgroundColor: 'rgba(129, 104, 157, 0.6)', // Mor tabaka
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
});


export default TimeWidget