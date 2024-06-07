import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import categoriesJSON from '../data/categories.json'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <View style={{flex: 20}} >
      <FlatList
        data={categoriesJSON}
        renderItem={({ item }) =>
          <View>
            <TouchableOpacity 
              onPress={() => {console.log(item)}} >
              <CategoriesItem category={item} />
            </TouchableOpacity>
          </View>}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})