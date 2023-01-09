import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../components/shared/colors';

const NavHeader = ({title = 'Task'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons color={colors.black} size={24} name={'menu'} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 24,
    color: colors.purple,
    fontWeight: '500',
    textAlign: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default NavHeader;
