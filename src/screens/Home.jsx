import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
  const {width, height} = useWindowDimensions()
  const [orientation, setOrientation] = useState('portrait')
  
  useEffect(() => {
    if(width > height) setOrientation('landscape')
      else setOrientation('portrait') 
  }, [width])

  return (
    <View style={(orientation === 'portrait') ? styles.containerHome : styles.containerHomeLandscape} >
      <Header title='Categorias' />
      <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  containerHome: {
    flex: 1, 
    width: '90%', 
    marginTop: '14%',
  },
  containerHomeLandscape: {
    flex: 1, 
    width: '90%', 
    marginTop: '5%',
  },




})