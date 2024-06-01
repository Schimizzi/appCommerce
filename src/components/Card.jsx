import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ children }) => {
    return (
        <View style={{alignItems: 'center'}} >
            <Text style={styles.card}>{children}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        flex: 1,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 10,
        backgroundColor: '#ffb',
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 15,
        width: '80%',
    },
})