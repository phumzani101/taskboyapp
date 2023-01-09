import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../components/shared/colors';
import AddTaskIcon from '../../../../navigation/components/AddTaskIcon';
import NavHeader from '../../../../navigation/components/NavHeader';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <NavHeader title="Home" />
      <ScrollView style={styles.contactContainer}>
        <Text style={styles.title}>Home</Text>
      </ScrollView>

      <AddTaskIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contactContainer: {
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 24,
    color: colors.purple,
    fontWeight: '300',
  },
});

export default HomeScreen;
