import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import colors from '../../../../components/shared/colors';
import AddTaskIcon from '../../../../navigation/components/AddTaskIcon';
import NavHeader from '../../../../navigation/components/NavHeader';

const TaskScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavHeader title="Task" />
      <ScrollView style={styles.contactContainer}>
        <Text style={styles.title}>Task</Text>
      </ScrollView>

      <AddTaskIcon />
    </View>
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

export default TaskScreen;
