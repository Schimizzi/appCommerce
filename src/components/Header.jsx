import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
    return (
        <View style={{flex: 1}} >
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        flex: 1,
        fontSize: 35,
        backgroundColor: '#fdd',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 15,
    }
})