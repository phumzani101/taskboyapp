import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from './shared/colors';

const Input = ({outlined, ...props}) => {
  return (
    <TextInput
      style={[styles.input, outlined ? styles.outlined : {}]}
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
  outlined: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
  },
});

export default Input;
