import { StatusBar } from 'expo-status-bar';

// screen components
import  Main  from './screen.js/Main';
import  Minicard  from './screen.js/Mini';
import Login from './screen.js/login';
import SignUp from './screen.js/Signup';
import ForgotPassword from './screen.js/ForgotPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='Signup' component={SignUp}/>
        <stack.Screen name='Forgot' component={ForgotPassword}/>
        <stack.Screen name='Main' component={Main}  options={{ headerShown: false }} />
        <stack.Screen name='Detail' component={Minicard}  options/>
      </stack.Navigator>
  </NavigationContainer>
  )
};