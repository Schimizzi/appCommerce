import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'


const CategoriesItem = ({category}) => {
  return (
    <Card >
      <Text>{category}</Text>
    </Card>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({})