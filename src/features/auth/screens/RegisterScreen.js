import React, {useState} from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../components/shared/colors';
import config from '../../../config';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';

const RegisterScreen = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const onAgreedChecked = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Get Started</Text>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />

        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={onAgreedChecked} />
          <Text style={styles.agreeText}>
            I agree to the{' '}
            <Text
              style={styles.agreeLink}
              onPress={() => {
                onLinkPress(config.termsLink);
              }}>
              Terms and Conditions
            </Text>{' '}
            and{' '}
            <Text
              style={styles.agreeLink}
              onPress={() => {
                onLinkPress(config.policyLink);
              }}>
              Privacy Policy
            </Text>
          </Text>
        </View>

        <Button style={styles.buttonBlue}>Create New Account</Button>

        <Text style={styles.footerText}>
          Already Registered?{' '}
          <Text
            style={styles.footerLink}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  agreeText: {
    color: colors.grey,
    fontSize: 12,
    marginLeft: 8,
  },
  agreeLink: {
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
