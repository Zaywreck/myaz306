import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import TimeWidget from './src/components/TimeWidget';
import Counter from './src/components/Counter';
import React from 'react'
import BookSeries from './src/components/bookSeries/BookSeries';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.header}>
                <TimeWidget />
                <Counter />
            </View>
            <View style={styles.body}>
                <BookSeries />
            </View>
            <View style={styles.footer}>
                <Text>footer</Text>
            </View> */}
            <BookSeries />
        </SafeAreaView>
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
    },
    footer: {
        flex: 1,
        backgroundColor: '#474F7A',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App