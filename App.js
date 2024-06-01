import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
