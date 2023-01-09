import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../components/shared/colors';

const StatusCard = ({label, count, style, color}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Tasks')}
      hitSlop={8}
      style={[styles.container, style ? style : {}]}>
      <Text style={[styles.label, color ? {color} : {}]}>{label}</Text>
      <Text style={[styles.count, color ? {color} : {}]}>{count}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    borderRadius: 15,
    backgroundColor: colors.lightGrey,
    width: '30%',
  },
  label: {
    fontSize: 10,
    color: colors.blue,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  count: {
    fontSize: 24,
    color: colors.blue,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});

export default StatusCard;
