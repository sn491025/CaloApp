import { Formik } from 'formik';
import * as Yup from 'yup';

//  API 
import axios from 'axios';

// Dimension 
import { Dimensions } from 'react-native';

// Vector-Icons
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// components
import { CustomButtonSignup } from '../components.js/Button';

import { View, StyleSheet, Text, Button, ScrollView, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// styles components
const { width, height } = Dimensions.get('window');

const baseWidth = 320;
const baseHeight = 800;

const horizontalScale = (size) => (width / baseWidth) * size;
const verticalScale = (size) => (height / baseHeight) * size;
const fontSize = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;


export default function SignUp() {

    // Navigation variables
    const Navigation = useNavigation();

    return (
        <View style={styles.container}>
                <SafeAreaView>
                <ScrollView>
                    {/* signup-Logo view */}
                    <View style={styles.iconView}>
                        <Image source={require('/Users/Chekhra/vsProjects/caloApp/assets/login-icon.png')} />
                        <Text style={styles.iconViewText}>Sign Up</Text>
                    </View>

                    {/* TextInput view */}
                    <View style={styles.textInputView}>

                        {/* Name */}
                        <View style={{ paddingBottom: verticalScale(30) }}>

                            {/* text */}
                            <Text style={styles.textInputViewText}>Name</Text>

                            {/* TextInput name view */}
                            <View style={styles.textInputViewIcon}>
                                {/* Icon */}
                                <FontAwesome name='user-circle' size={30} color='#888889' style={{ marginLeft: 20 }} />

                                {/* textInput */}
                                <TextInput
                                    placeholder='Enter Your Full Name'
                                    style={styles.textInputViewIconInputText}
                                />

                            </View>
                        </View>

                        {/* Mobile number */}
                        <View style={{ paddingBottom: verticalScale(30) }}>

                            {/* text */}
                            <Text style={styles.textInputViewText}>Mobile Number</Text>

                            {/* TextInput name view */}
                            <View style={styles.textInputViewIcon}>
                                {/* Icon */}
                                <MaterialIcons name="call" size={30} color='#7A7A7A' style={{ marginLeft: 20 }} />

                                {/* textInput */}
                                <TextInput
                                    placeholder='Enter Your Mobile Number'
                                    style={styles.textInputViewIconInputText}
                                    keyboardType='name-phone-pad'
                                />

                            </View>
                        </View>

                        {/* Email */}
                        <View style={{ paddingBottom: verticalScale(30) }}>

                            {/* text */}
                            <Text style={styles.textInputViewText}>Email</Text>

                            {/* TextInput name view */}
                            <View style={styles.textInputViewIcon}>

                                {/* Icon */}
                                <MaterialCommunityIcons name="email-fast" size={30} color='#7A7A7A' style={{ marginLeft: 20 }} />

                                {/* textInput */}
                                <TextInput
                                    placeholder='Enter Your Email ID'
                                    style={styles.textInputViewIconInputText}
                                    keyboardType='email-address'
                                />

                            </View>
                        </View>

                        {/* Password */}
                        <View style={{ paddingBottom: verticalScale(30) }}>

                            {/* text */}
                            <Text style={styles.textInputViewText}>Password</Text>

                            {/* TextInput name view */}
                            <View style={styles.textInputViewIcon}>

                                {/* Icon */}
                                <MaterialIcons name="lock" size={30} color='#7A7A7A' style={{ marginLeft: 20 }} />

                                {/* textInput */}
                                <TextInput
                                    placeholder='Enter Your Password'
                                    style={styles.textInputViewIconInputText}
                                    keyboardType='visible-password'
                                />

                            </View>
                        </View>

                        {/* Re-enter password */}
                        <View style={{ paddingBottom: verticalScale(30) }}>

                            {/* text */}
                            <Text style={styles.textInputViewText}>Re-enter Password</Text>

                            {/* TextInput name view */}
                            <View style={styles.textInputViewIcon}>

                                {/* Icon */}
                                <MaterialCommunityIcons name="lock-reset" size={30} color='#7A7A7A' style={{ marginLeft: 20 }} />

                                {/* textInput */}
                                <TextInput
                                    placeholder='Re-enter Your Password'
                                    style={styles.textInputViewIconInputText}
                                    keyboardType='visible-password'
                                />

                            </View>
                        </View>

                        {/* Button */}
                        <TouchableOpacity onPress={() => Navigation.navigate('Main')}>
                            <CustomButtonSignup />
                        </TouchableOpacity>

                    </View>


                </ScrollView >
        </SafeAreaView>
            </View >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#fffF',
    },
    iconView: {
        flex: 2,
        alignItems: 'center'
    },
    iconViewText: {
        fontSize: fontSize(19),
        fontWeight: '500'
    },
    textInputView: {
        flex: 8,
        paddingHorizontal: horizontalScale(15),
        paddingVertical: verticalScale(10)
    },
    textInputViewText: {
        fontSize: fontSize(18),
        marginBottom: verticalScale(10),
        fontWeight: '500',
        color: '#757575',
    },
    textInputViewIcon: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: verticalScale(15),
        borderColor: '#C8C8C7',
    },
    textInputViewIconInputText: {
        marginLeft: horizontalScale(20),
        fontSize: fontSize(15),
        fontWeight: '600',
        color: '#757575',
        width:260
    },
})