import { StatusBa, } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Main() {

  const [data, setData] = useState([]);


  // const Addpost = (title,dob) => {
  //   fetch("https://bca5-49-37-217-139.ngrok.io/posts",
  //   {
  //     method: "post",
  //     headers:{
  //       'Accept': 'application/json',
  //       'content-type' : 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "title": title,
  //       "dob": dob,
  //     })
  //   }).then((res) => res.json())
  //   .then(resJson => {
  //     console.log("profile", resJson)
  //     useData(resJson);
  //   }).catch(sa => console.log(sa))

  // }


  const getResos = async () => {
    try {
      const response = await fetch('https://hf-android-app.s3-eu-west-1.amazonaws.com/android-test/recipes.json');
      const json = await response.json();
      // setData(json);
      const listItems = json.map((number) =>
        <li>{number.name}</li>
      );
      setData(json);
      // console.log(datapp);

    } catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {
    getResos();
  }, []);


  const Item = ({ title }) => (
    <TouchableOpacity onPress={() => Navigation.navigate('Detail',{ title: title}) }>
      <View style={[styles.container,{flexDirection:'row'}]}>
        {/* img */}
        <View style={{flex: 2}}>
          <Image style={styles.imags} source={{uri: title.image}} />
        </View>
        {/* title */}
        <View style={{flex:3}}>
          <Text style={{marginLeft: 20,fontSize:16,paddingBottom:16} }>{title.name}</Text>
          <Text style={{marginLeft: 20,fontSize:16,paddingBottom:16,}}>{title.headline}</Text>
          <Text style={{marginLeft: 20,fontSize:16,paddingBottom:16}}>{title.calories}</Text>
        </View>
        {/* sec title */}
        <View style={{flex:1}}>
          <Text style={{marginTop:70,marginLeft:10}}>{title.fats}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );


  const Navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View>
      <Item title={item} />
    </View>
  )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
  },
  card: {
    flexDirection:'row',
    backgroundColor: '#f9c2ff',
  },
  cardtitle: {
    flexDirection: 'column',
    marginLeft: 6,
    
  },
  cardtitle2: {
    flexDirection: 'row',
  },
  imags: {
    width: 122,
    height: 97,
  },
  title1: {
    fontSize: 16,
  
  },
  title2: {
    fontSize: 16,
    marginLeft:10 
  },

});



