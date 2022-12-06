import { StatusBar } from 'expo-status-bar';

import  Main  from './screen.js/Main';
import Nara from './screen.js/Nara';
import  Minicard  from './screen.js/Mini';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Main' component={Main}/>
        <stack.Screen name='Detail' component={Minicard}  options/>
      </stack.Navigator>
  </NavigationContainer>
  )
};