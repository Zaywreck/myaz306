import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlexPractice = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}>Body</Text>
        </View>
        <View style={styles.footer} >
            <Text style={styles.footerText}>Footer</Text>
        </View>

    </View>
  )
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    header: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    body: {
        flex: 4,
        backgroundColor: 'white',
        paddingTop: 40,
    },
    bodyText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    },
    footer: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    footerText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
})

export default FlexPractice