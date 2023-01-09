import moment from 'moment';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import RNDatePicker from 'react-native-date-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../components/shared/colors';

const DatePicker = ({date, setDate, ...props}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        title="Open"
        onPress={() => setOpen(true)}
        style={styles.outlined}>
        <MaterialCommunityIcons
          color={colors.black}
          size={24}
          name={'calendar-range'}
        />
        <Text style={styles.text}>
          {moment(date).format('L') || 'Select Date...'}
        </Text>
      </TouchableOpacity>

      <RNDatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={time => {
          setOpen(false);
          setDate(time);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  outlined: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    color: colors.black,
    borderRadius: 10,
    marginVertical: 12,

    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default DatePicker;
