import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const Header = ({ title }) => {
    const { width, height } = useWindowDimensions()
    console.log(width)
    console.log(height)
    //landscape : paisaje - modo horizontal
    //portraint : portaretrato - modo vertical

    const [orientation, setOrientation] = useState('portrait')

    useEffect(() => {
        if (width > height) setOrientation('landscape')
        else setOrientation('portrait')
    }, [width, height])

    return (
        <View style={
                orientation === 'portrait' ? styles.containerHeader : styles.containerHeaderLandscape
        } >
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        backgroundColor: '#fdd',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 15,

    },
    containerHeader: {
        flex: 2,
    },
    containerHeaderLandscape: {
        flex: 4,
    },
})