import { StyleSheet, Text, View } from 'react-native'
import TimeWidget from './src/components/TimeWidget';
import React from 'react'

const App = () => {
    return (
        <View style={styles.container}>
            <TimeWidget />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2544',
    },
})

export default App