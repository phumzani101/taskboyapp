import React from 'react';
import {StyleSheet, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import colors from './shared/colors';

const Checkbox = ({style, checked, onPress}) => {
  return (
    <Pressable
      style={[styles.container, checked ? styles.checked : {}]}
      onPress={onPress}>
      {checked ? <View style={styles.innerSquare} /> : <View />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    borderColor: colors.purple,
    borderWidth: 1,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    borderWidth: 2,
  },
  innerSquare: {
    backgroundColor: colors.purple,
    borderRadius: 3,
    borderColor: colors.purple,
    borderWidth: 1,
    width: 8,
    height: 9,
  },
});

export default Checkbox;
