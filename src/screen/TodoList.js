import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeContext} from '../context/ThemeContext';
import {deleteToDo} from '../reducers/todosSlice';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const {dynamicColors} = useContext(ThemeContext);
  const dispatch = useDispatch();
  console.log('list Of todos => ', todos);
  const deleteTodo = id => {
    dispatch(deleteToDo(id));
  };

  return (
    <View style={{backgroundColor: dynamicColors.PAGE_BACKGROUND_COLOR}}>
      <Text style={styles.title}>ToDo List</Text>
      <ScrollView>
        {todos.map((item, index) => (
          <View
            key={'' + index}
            style={[
              styles.itemWraper,
              {
                backgroundColor: dynamicColors.ACCENT_COLOR,
              },
            ]}>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Image
                source={require('./../assets/icons/delete.png')}
                style={[
                  styles.deleteIcon,
                  {
                    tintColor: dynamicColors.TEXT_ICON_COLOR,
                  },
                ]}
              />
            </TouchableOpacity>
            <Text
              style={[styles.todo, {color: dynamicColors.TEXT_ICON_COLOR}]}
              key={item.id}>{`${'  '}${item.text}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  todoText: {
    margin: 4,
  },
  itemWraper: {
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
  },
  todo: {
    marginStart: 5,
  },
  deleteIcon: {
    height: 20,
    width: 20,
  },
});
