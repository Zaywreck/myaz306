import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { React, useState } from 'react'

const Counter = () => {
    const [Counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(Counter + 1);
    }
    const decrease = () => {
        setCounter(Counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>{Counter}</Text>
            </View>
            <View style={styles.buttonLayout}>
                <TouchableOpacity style={styles.button} onPress={increase}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrease}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={reset}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#474F7A',
    },
    body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLayout: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1F2544',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        color: '#168071',
    },
    button: {
        backgroundColor: '#223331',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: '#168071',
        fontSize: 20,
    }
});

export default Counter