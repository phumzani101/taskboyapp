import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button';
import colors from '../../../components/shared/colors';

const AuthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/splash.png')}
        />
        <View style={styles.divider} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Taskboy App</Text>
        <Text style={styles.subtitle}>
          Get shit together and boost your productivity
        </Text>

        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Log in
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.buttonBlue}>
          Get Started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  divider: {
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
  },

  buttonBlue: {
    backgroundColor: colors.blue,
  },
});

export default AuthScreen;
