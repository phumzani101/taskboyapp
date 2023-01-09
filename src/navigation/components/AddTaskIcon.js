import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../components/shared/colors';

const AddTaskIcon = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('AddTask')}
      hitSlop={8}
      style={styles.container}>
      <MaterialCommunityIcons
        color={colors.white}
        backgroundColor={colors.blue}
        size={24}
        name={'plus'}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 24,
    right: 24,
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

export default AddTaskIcon;
