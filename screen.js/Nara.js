import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Data = [
  { title: 'sankara', id: '1' },
  { title: 'narayanan', id: '2' },
  { title: 'dev', id: '3' },
  { title: 'Leo', id: '4' },
  { title: 'Eswar', id: '5' },
  { title: 'Bala', id: '6' },
  { title: 'gana', id: '7' },
  { title: 'Marvel', id: '8' }
];

const Item = ({ title }) => (
  <View style={styles.forView}>
    <Text style={styles.fortext}>{title}</Text>
  </View>
);

export default function Nara() {
    const Navigation = useNavigation(); 


  const renderItem= ({item}) => (
      <Item title = {item.title} />
  );

  return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => Navigation.navigate('sec') }>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
          </TouchableOpacity>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fortext: {
   fontSize: 30
  },
  forView: {
    backgroundColor:'#F3FF00',
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#F8F8F6',
    borderRadius:20
  }
});

