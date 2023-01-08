import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../../../components/shared/colors';

const Input = ({styleInput, ...props}) => {
  return (
    <TextInput
      style={[styles.input, styleInput]}
      placeholderTextColor={colors.midGrey}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 24,
    paddingVertical: 12,
    color: colors.black,
    borderRadius: 10,
    marginVertical: 12,
    fontSize: 16,
  },
});

export default Input;
