import React, {useState} from 'react';
import {Alert, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../../../components/Button';
import colors from '../../../components/shared/colors';
import config from '../../../config';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const onAgreedChecked = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onSubmit = async () => {
    if (!firstName || !lastName) {
      Alert.alert('Please enter your name');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Your passwords do not match');
      return;
    }

    if (!agreed) {
      Alert.alert('You should agree to the terms and conditions');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async authenticate => {
        await authenticate.user.updateProfile({
          displayName: `${firstName} ${lastName}`,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
          return;
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
          return;
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('The password is too weak.');
          return;
        }

        Alert.alert('Failed to register, please try again');
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.title}>Get Started</Text>
        <Input
          placeholder="First name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChangeText={text => setLastName(text)}
        />
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
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />

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

        <Button style={styles.buttonBlue} onPress={onSubmit}>
          Create New Account
        </Button>

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
      </ScrollView>
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
