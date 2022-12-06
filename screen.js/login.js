import {  StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

// Vector-Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// components
import CustomButton from '../components.js/Button';

// yup object 
const errorMesg = Yup.object({
  login: Yup.string()
    .required('username is required'),
  pass: Yup.string()
    .required('password is required')

})




export default function Login() {

  // Navigation
  const Navigation = useNavigation();

  const handlerLogin = (user) => {
    console.log(user);
    axios({
      method: 'get',
      url: `http://members.leelootrading.com/amember/api/check-access/by-login-pass/?_key=EfqeUdbphjPX3KlYBVOM&login=${user.login}&pass=${user.pass}`,
    })
      .then((res) => {

        //  console.log(res); // status checking (true or false)

        const result = res.data;
        const { ok } = result; // destruction 

        if (ok !== false) {
          Navigation.navigate('Main');
        } else {
          alert(JSON.stringify("The username (or) password is incorrect"));
          console.log('error');
        }
      })
      .catch(error => {
        console.error(error);
      });

  }

  const signup = () => {
    return (
      // <TouchableOpacity onPress={{}}>
      <TouchableWithoutFeedback onPress={() => Navigation.navigate('Signup')}>
        <Text style={{ fontSize: 17, fontWeight: '600', }}>Sign Up</Text>
      </TouchableWithoutFeedback>
      // </TouchableOpacity>
    );
  }

  return (

    <Formik
      initialValues={{ login: '', pass: '' }}
      validationSchema={errorMesg}
      onSubmit={(values) => handlerLogin(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
        return (
          <View style={styles.container}>
           <ScrollView>
              {/* Login-icon png */}
              <View style={styles.loginicon}>
                <Image source={require('/Users/Chekhra/vsProjects/caloApp/assets/login-icon.png')} />
  
                {/* login static text */}
                <View>
                  <Text style={{ fontSize: 17, fontWeight: '800', textAlign: 'center', }}>Welcome to the Eldorado Family</Text>
                </View>
              </View>
  
              <View style={styles.textviews}>
  
                {/* Login user name */}
                <View >
                  <Text style={styles.usernametext}> Username</Text>
                  <View style={styles.inputIcon}>
  
                    {/* Icons */}
                    <FontAwesome name='user-circle' size={30} color='#888889' style={{ marginLeft: 20 }} />
  
                    <TextInput style={styles.userinput}
                      value={values.login}
                      placeholder="Enter your username "
                      onChangeText={handleChange('login')}
                      onBlur={handleBlur('login')}
                      defaultValue={values.data}
                      keyboardType="email-address"
                      inlineImageLeft='/Users/Chekhra/vsProjects/caloApp/assets/mdi_password.png' />
                  </View>
  
                  {/* username required message */}
                  <Text>{errors.login}</Text>
                </View>
  
                {/* Login user password */}
                <View style={{marginTop:20}}>
                  <Text style={styles.usernametext}>Password</Text>
  
                  <View style={styles.inputIcon}>
  
                    {/* Icons */}
                    <MaterialIcons name='lock' size={30} style={{ marginLeft: 20 }} color='#888889' />
  
                    <TextInput style={styles.userinput}
                      value={values.pass}
                      placeholder="Enter your Password"
                      onChangeText={handleChange('pass')}
                      onBlur={handleBlur('pass')}
                      defaultValue={values.login}
                      secureTextEntry={true} />
  
                  </View>
  
                  {/* Forgot password */}
                  <View style={styles.forgottext}>
                    <Text style={{ fontSize: 17, color: '#4457DE', fontWeight: '400' }}>Forgot Password </Text>
                  </View>
  
                  {/* username required message */}
                  <Text>{errors.pass}</Text>
  
                  {/* Custom login Button */}
                  <View style={{ marginVertical: 18 }}>
                    <TouchableOpacity onPress={handleSubmit}>
                      <CustomButton />
                    </TouchableOpacity>
  
                    {/* for sign up */}
                    <View style={{ marginTop: 17, alignItems: 'center' }}>
                      <Text style={{ fontSize: 16, fontWeight: '600' }}>Don't have an Account ?{signup()}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>  
          </View>

        );
      }}
    </Formik>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#fffF'
  },
  loginicon: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'center',

  },
  textviews: {
    flex: 6,
    paddingHorizontal: 27,
    marginVertical:30
  },
  userinput: {
    paddingLeft: 24,
    fontSize: 20,

  },
  inputIcon: {
    borderColor: '#C8C8C7',
    borderWidth: 2,
    borderRadius: 8,
    height: 60,
    flexDirection: 'row',
    borderWidth: 0.5,
    alignItems: 'center',
  },
  usernametext: {
    fontSize: 20,
    marginBottom: 15,
    color: '#000000'
  },
  forgottext: {
    marginTop: 20,
    alignItems: 'flex-end',
  },



});
