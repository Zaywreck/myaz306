import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/colors'

const BookSeries = () => {

    const [book, setBook] = useState();
    const [books, setBooks] = useState([]);
    const [readed, setReaded] = useState([]);

    const handlePress = () => {
        setBooks([...books, book]);
    }
    const handleOnTextChange = (text) => {
        setBook(text);
    }
    const handleLongPress = (item) => {
        setReaded([...readed, item]);
        setBooks(books.filter((b) => b !== item));
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Book Series</Text>
                </View>
                <View style={styles.inputArea}>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            value={book}
                            onChangeText={handleOnTextChange}
                            style={styles.textInput} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Add"
                            onPress={handlePress}
                            color={Colors.gold}
                            style={styles.button}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.booksContainer}>
                <ScrollView>
                    {books.map((item, index) => (
                        <View style={styles.book} key={index}>
                            <Pressable onLongPress={() => handleLongPress(item)}>
                                <Text style={styles.text}>{index + 1} - {item}</Text>
                            </Pressable>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.readedContainer}>
                <ScrollView>
                    {readed.map((item, index) => (
                        <View style={styles.readed} key={index}>
                            <Pressable onLongPress={() => handleLongPress(item)}>
                                <Text style={styles.text}>{index + 1} - {item}</Text>
                            </Pressable>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default BookSeries

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },
    inputContainer: {
        flex: 1,
        backgroundColor: Colors.primary400
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: Colors.gold,
    },
    inputArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 10,
    },
    textInputContainer: {
        width: '70%',
        height: 40,
        backgroundColor: Colors.white,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.gold,
    },
    buttonContainer: {
        width: '20%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.gold,
        backgroundColor: Colors.primary300,
    },
    textInput: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
    },
    booksContainer: {
        flex: 4,
        backgroundColor: Colors.primary500,
    },
    text: {
        color: Colors.gold,
        fontSize: 20,
        paddingLeft: 15,
    },
    book: {
        margin: 5,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: Colors.primary300,
    },
    readed: {
        margin: 5,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: Colors.primary300,
    },
    readedContainer: {
        flex: 4,
        backgroundColor: Colors.primary400,
    }

})