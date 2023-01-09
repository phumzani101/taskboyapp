import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryList from '../../../../components/CategoryList';
import categories from '../../../../components/shared/categories';
import colors from '../../../../components/shared/colors';
import AddTaskIcon from '../../../../navigation/components/AddTaskIcon';
import NavHeader from '../../../../navigation/components/NavHeader';
import TaskItem from '../components/TaskItem';

const TaskScreen = ({navigation}) => {
  const [category, setCategory] = useState('');
  const {list = []} = useSelector(state => state.task);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (category) {
      const filter = list.filter(task => task.category === category);
      setTasks(filter);
    } else {
      setTasks(list);
    }
  }, [category, list]);

  return (
    <View style={styles.container}>
      <NavHeader title="Task" />

      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={styles.title}>Task Todo</Text>
            <CategoryList
              categories={[{label: 'All', value: ''}, ...categories]}
              selected={category}
              onCategoryPress={setCategory}
            />
          </View>
        }
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskItem task={item} />}
        style={styles.contactContainer}
      />

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
    marginBottom: 20,
  },
});

export default TaskScreen;
