import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {ThemeContext} from '../context/ThemeContext';
import {addTodo} from '../reducers/todosSlice';

export const AddTodo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const {dynamicColors} = useContext(ThemeContext);

  function handleSumbit() {
    //dispatch action method and make input empty.
    dispatch(addTodo(text));
    setText('');
  }

  return (
    <View>
      <TextInput
        placeholder="Enter ToDo here"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button
        title="Add"
        color={dynamicColors.PRIMARY_COLOR}
        onPress={handleSumbit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    marginBottom: 8,
    padding: 8,
    height: 40,
  },
});
