import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

// Export components
export { CustomButtonLogin, CustomButtonSignup }


// Login custom button
const CustomButtonLogin = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </View>
    );

}

// signup custom button
const CustomButtonSignup = () => {
    return (
        <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
        </View>
    );
}





const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4457DE',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#4457DE'

    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        padding: 10,
    }

})