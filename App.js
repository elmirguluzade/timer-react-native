import { Text, View, StyleSheet, Image, StatusBar, Button, FlatList } from 'react-native';
import ButtonComponent from './components/Button';
import Lap from './components/Lap';
import { useState } from 'react';

const App = () => {
  const [timer, setTimer] = useState('00:00:00')
  const [laps, setLaps] = useState([])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/clock.webp')} />
      <Text style={styles.timer}>{timer}</Text>
      <Lap laps={laps}/>
      <ButtonComponent setTimer={setTimer} timer={timer} setLaps={setLaps} laps={laps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  image: {
    width: 250,
  },
  timer: {
    fontSize: 60,
    fontWeight: 600
  },
})

export default App
