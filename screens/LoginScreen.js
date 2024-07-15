import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleContinueGoogle = () => {
    // Handle continue with Google logic
  };

  const handleContinueFacebook = () => {
    // Handle continue with Facebook logic
  };

  return (
    <ImageBackground source={require('assets/beachbg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Get your groceries with nectars</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleContinueGoogle}>
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleContinueFacebook}>
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay for better contrast
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Adjust text color for visibility on background
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    fontSize: 18,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: '#DB4437', // Google's red color
  },
  facebookButton: {
    backgroundColor: '#3B5998', // Facebook's blue color
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;