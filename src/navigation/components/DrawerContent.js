import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Linking, StyleSheet} from 'react-native';
import colors from '../../components/shared/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config';
import auth from '@react-native-firebase/auth';

const DrawerContent = props => {
  const {navigation} = props;

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.link}
        icon={({focused, color, size}) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={focused ? 'home-variant' : 'home-variant-outline'}
          />
        )}
      />

      <DrawerItem
        label="Tasks"
        onPress={() => navigation.navigate('Tasks')}
        style={styles.link}
        icon={({focused, color, size}) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={focused ? 'calendar-check' : 'calendar-check-outline'}
          />
        )}
      />
      <DrawerItem
        label="Add Task"
        onPress={() => navigation.navigate('AddTask')}
        style={styles.link}
        icon={({focused, color, size}) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={focused ? 'plus-circle' : 'plus-circle-outline'}
          />
        )}
      />
      <DrawerItem
        label="Terms and Conditions"
        onPress={() => Linking.openURL(config.termsLink)}
        icon={({focused, color, size}) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={'book-information-variant'}
          />
        )}
      />
      <DrawerItem
        label="Privacy Policy"
        onPress={() => Linking.openURL(config.policyLink)}
        style={styles.link}
        icon={({focused, color, size}) => (
          <MaterialCommunityIcons
            color={color}
            size={size}
            name={focused ? 'shield-sun' : 'shield-sun-outline'}
          />
        )}
      />

      <DrawerItem
        label="Logout"
        onPress={() => logout()}
        style={styles.link}
        icon={({color, size}) => (
          <MaterialCommunityIcons color={color} size={size} name={'logout'} />
        )}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  link: {
    fontSize: 36,
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DrawerContent;
