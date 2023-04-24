import { Text, View, StyleSheet, FlatList } from 'react-native';


const Item = ({ title, index }) => {
  return (
    <View style={styles.allLists} key={index}>
      <Text>{index}</Text>
      <Text>{title}</Text>
    </View>
  )
}

const Lap = ({ laps }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={laps}
        renderItem={({ item, index }) => <Item title={item} index={index} />}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  allLists: {
    flex: 1,
    borderWidth: 1,
    width: '90%',
    borderColor: '#e6c97a'
  }
})

export default Lap
