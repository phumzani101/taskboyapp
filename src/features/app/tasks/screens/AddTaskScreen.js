import moment from 'moment';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../../components/Button';
import CategoryList from '../../../../components/CategoryList';
import Input from '../../../../components/Input';
import categories from '../../../../components/shared/categories';
import colors from '../../../../components/shared/colors';
import Title from '../../../../components/Title';
import DatePicker from '../components/Datepicker';
import {useDispatch, useSelector} from 'react-redux';
import {setUpdated} from '../../../../store/slices/taskSlice';

const AddTaskScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadline = moment(date).format('YYYY-MM-DD');
    if (!title || !date || !category) {
      Alert.alert('Please enter all fields');
      return;
    }

    if (moment(deadline).isBefore(today)) {
      Alert.alert('Deadline cannot be before today');
      return;
    }
    setIsLoading(true);
    firestore()
      .collection('Tasks')
      .add({
        title,
        deadline: date,
        category,
        user: user?.uid,
        checked: false,
      })
      .then(() => {
        setIsLoading(false);
        dispatch(setUpdated());
        setCategory('');
        setTitle('');
        setDate(new Date());
        navigation.navigate('Tasks');
        console.log('Task added!');
      })
      .catch(() => {
        Alert.alert('Failed to add task! Please try again');
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={8}
        style={styles.backContainer}>
        <MaterialCommunityIcons
          color={colors.black}
          size={24}
          name={'arrow-left'}
        />
      </Pressable>
      <View style={styles.contactContainer}>
        <Title style={styles.title}>Add Task Screen</Title>
        <Text style={styles.label}>Describe the task</Text>
        <Input
          placeholder="Type here..."
          outlined
          value={title}
          onChangeText={text => setTitle(text)}
        />

        <Text style={styles.label}>Describe the task</Text>
        <CategoryList
          categories={categories}
          selected={category}
          onCategoryPress={setCategory}
        />

        <Text style={styles.label}>Deadline</Text>

        <DatePicker date={date} setDate={setDate} />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button style={styles.buttonBlue} onPress={onSubmit}>
            Add Task
          </Button>
        )}
      </View>
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
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 24,
    color: colors.purple,
    fontWeight: '300',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    color: colors.black,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default AddTaskScreen;
