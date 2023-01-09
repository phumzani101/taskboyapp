import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Checkbox from '../../../../components/Checkbox';
import colors from '../../../../components/shared/colors';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {setUpdated} from '../../../../store/slices/taskSlice';

const TaskItem = ({task}) => {
  const dispatch = useDispatch();
  const onUpdate = () => {
    firestore()
      .collection('Tasks')
      .doc(task.id)
      .update({
        checked: !task.checked,
      })
      .then(() => {
        dispatch(setUpdated());
      });
  };

  return (
    <View style={styles.container}>
      <Checkbox checked={task.checked} onPress={() => onUpdate()} />
      <Text style={[styles.title, task.checked ? styles.checked : {}]}>
        {task.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '300',
    marginLeft: 8,
  },
  checked: {
    textDecorationLine: 'line-through',
  },
});

export default TaskItem;
