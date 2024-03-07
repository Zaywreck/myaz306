import { StyleSheet, Text, View } from 'react-native'
import TimeWidget from './src/components/TimeWidget';
import Counter from './src/components/Counter';
import React from 'react'

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TimeWidget />
                <Counter />
            </View>
            <View style={styles.body}>
                <Text>Merhaba</Text>
            </View>
            <View style={styles.footer}>
                <Text>footer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2544',
    },
    header : {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    body: {
        flex: 8,
        backgroundColor: '#1F2544',
        paddingTop: 40,
    },
    footer: {
        flex: 1,
        backgroundColor: '#474F7A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30
    }
})

export default App