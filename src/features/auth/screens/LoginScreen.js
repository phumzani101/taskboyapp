import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import colors from '../../../components/shared/colors';
import Input from '../../../components/Input';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Please enter your email and password');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async authenticate => {})
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Wrong password. please try again');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        Alert.alert('Incorrect email or password');
      });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button style={styles.buttonBlue} onPress={onSubmit}>
          Log in
        </Button>

        <Text style={styles.footerText}>
          Not Registered?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            Get Started
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 24,
  },

  buttonBlue: {
    backgroundColor: colors.blue,
  },
  footerText: {
    fontSize: 16,
    color: colors.grey,
    textAlign: 'center',
    paddingVertical: 24,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
