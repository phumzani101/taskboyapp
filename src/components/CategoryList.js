import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from './shared/colors';

const CategoryList = ({categories = [], selected, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item.value)}
      renderItem={({item, index}) => {
        const selectedItem = selected === item.value;
        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item.value)}
            style={[
              styles.container,
              selectedItem ? styles.selectedContainer : {},
            ]}
            key={index}>
            <Text
              style={[styles.item, selectedItem ? styles.selected : {}]}
              key={index}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginRight: 8,
    borderRadius: 8,
    borderColor: colors.blue,
    borderWidth: 1,
  },
  item: {
    fontSize: 12,
    color: colors.blue,
    padding: 8,
    paddingHorizontal: 12,
    fontWeight: 'bold',
  },
  selected: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  selectedContainer: {
    backgroundColor: colors.lightGrey,
    borderColor: colors.lightGrey,
  },
});

export default CategoryList;
