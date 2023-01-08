import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../components/shared/colors';
import Input from '../components/Input';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Button style={styles.buttonBlue}>Log in</Button>

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
