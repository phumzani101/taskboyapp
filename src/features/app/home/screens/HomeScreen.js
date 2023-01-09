import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import colors from '../../../../components/shared/colors';
import AddTaskIcon from '../../../../navigation/components/AddTaskIcon';
import NavHeader from '../../../../navigation/components/NavHeader';
import {loadTasks} from '../../../../store/slices/taskSlice';
import StatusCard from '../components/StatusCard';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const [counts, setCounts] = useState({
    high: 0,
    due: 0,
    quick: 0,
  });
  const {user} = useSelector(state => state.auth);
  const {list: tasks, updatedAt} = useSelector(state => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      firestore()
        .collection('Tasks')
        .where('user', '==', user?.uid)
        .get()
        .then(querySnapshot => {
          // console.log('Total tasks: ', querySnapshot.size);

          const taskList = [];

          querySnapshot.forEach(documentSnapshot => {
            taskList.push({
              id: documentSnapshot?.id,
              ...(documentSnapshot.data() || {}),
            });
          });
          dispatch(loadTasks(taskList));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, updatedAt]);

  useEffect(() => {
    if (tasks.length) {
      const high = tasks?.filter(
        task => task?.category === 'urgent' || task?.category === 'important',
      );

      const today = moment(new Date()).format('YYYY-MM-DD');
      const due = tasks?.filter(task => moment(task?.deadline).isBefore(today));
      const quick = tasks?.filter(task => task?.category === 'quick_task');

      setCounts({
        high: high.length,
        due: due.length,
        quick: quick.length,
      });
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <NavHeader title="Home" />
      <ScrollView style={styles.contactContainer}>
        <Text style={styles.title}>Daily Tasks</Text>

        <View style={styles.row}>
          <StatusCard
            label="High Priority"
            count={counts.high}
            style={styles.card1}
            color={colors.purple}
          />
          <StatusCard
            label="Due Deadline"
            count={counts.due}
            style={styles.card2}
            color={colors.red}
          />
          <StatusCard
            label="Quick Win"
            count={counts.quick}
            style={styles.card3}
            color={colors.blue}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Tasks')}
          style={styles.box}>
          <Text style={styles.title}>View All Tasks </Text>
          <Text style={styles.subtitle}>
            View all tasks and filter by categories
          </Text>
        </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
  },
  card1: {
    backgroundColor: colors.lightGrey,
  },
  card2: {
    backgroundColor: colors.lightRed,
    marginHorizontal: 8,
  },
  card3: {
    backgroundColor: colors.lightGrey,
  },
  box: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 24,
    alignItems: 'center',
    marginTop: 26,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default HomeScreen;
