import { StatusBa, } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native';



export default function Minicard({ route }) {
   const titles = route.params.title;
   console.log(titles);
    return (
        <ScrollView>
            {/* Img */}
            <View style={{ alignSelf: 'center', marginTop: 15 }}>
                <Image style={{ width: 364, height: 180 }} source={{uri: titles.image}} />
            </View>
            {/* overall text */}
            <View style={{paddingLeft:15}}>
            {/* Name */}
            <View style={{ marginTop: 26 }}>
                <Text style={{ fontSize: 32 }}>{titles.name}</Text>
            </View>
            {/* Headline */}
            <View>
                <Text style={{marginTop: 34,fontSize:32}}>Headline</Text>
            </View>
            {/* Protiens view */}
            <View style={{flexDirection:'row',marginTop:45}}>
                {/* Protiens text */}
                <View style={{marginLeft:55,marginTop:10}}>
                <Text style={{fontSize:16,marginBottom:41,}}>Calories</Text>
                <Text style={{fontSize:16,marginBottom:41,}}>Protiens</Text>
                <Text style={{fontSize:16,marginBottom:41,}}>Fat</Text>
                <Text style={{fontSize:16,marginBottom:41,}}>Carbos</Text>
                </View>
                {/* Protiens points */}
                <View>
                    <Text style={{fontSize:16,marginBottom:16,marginLeft:56,backgroundColor:'#C5C4C8',paddingVertical:12,paddingHorizontal:62}}>{titles.calories}</Text>
                    <Text style={{fontSize:16,marginBottom:16,marginLeft:56,backgroundColor:'#C5C4C8',paddingVertical:12,paddingHorizontal:62}}>{titles.proteins}</Text>
                    <Text style={{fontSize:16,marginBottom:16,marginLeft:56,backgroundColor:'#C5C4C8',paddingVertical:12,paddingHorizontal:62}}>{titles.fats}</Text>
                    <Text style={{fontSize:16,marginBottom:16,marginLeft:56,backgroundColor:'#C5C4C8',paddingVertical:12,paddingHorizontal:62}}>{titles.carbos}</Text>
                </View>
            </View>
                {/* Description */}
                <View >
                    <Text style={{fontSize:32}}>Description</Text>
                    <Text style={{margin:16,fontSize:16}}>{titles.description}</Text>
                </View>
            </View>
        </ScrollView>



















        // <View >
        //     <Text>{ route.params.name}</Text>
        //     <Text>{ route.params.key }</Text>
        //     <Text>{ route.params.date }</Text>
        // </View>
    )

}