import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from './shared/colors';

const Title = ({text = 'Title', style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default Title;
