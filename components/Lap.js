import { Text, View, StyleSheet, FlatList, Dimensions } from 'react-native';


const Item = ({ title, index }) => {
  return (
    <View style={styles.allLists} key={index}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

const Lap = ({ laps }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={laps}
        renderItem={({ item, index }) => <Item title={item} index={index} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  listContainer: {
    flex: 3,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  allLists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 0,
    borderBottomColor: '#e6c97a',
    borderBottomWidth: 1
  },
  index: {
    fontSize: 20,
    fontWeight: 700,
    color: '#e6c97a',
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingLeft: 14,
    paddingTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "#e6c97a"
  }
})

export default Lap
