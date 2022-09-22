import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {AddTodo} from './AddTodo';
import {TodoList} from './TodoList';

const ToDoScreen = ({navigation}) => {
  const {dynamicColors} = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dynamicColors.PAGE_BACKGROUND_COLOR},
      ]}>
      <AddTodo />
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bodyContainer: {
    padding: 10,
  },
  itemView: {marginTop: 5},
});

export default ToDoScreen;
