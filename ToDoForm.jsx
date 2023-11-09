import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const ToDoForm = () => {
    const handlePress = () => {};

    const [inputText, setInputText] = React.useState('');
    const handleTextChange = (text) => {
    setInputText(text);

};
  return (
    <View style={styles.form}>
    <TextInput
      style={styles.input}
      value={inputText}
      onChangeText={handleTextChange}
      placeholder="Add a new task..."/>
    <Button title="Add" onPress={handlePress}/>
  </View>
  );
};

const styles = StyleSheet.create({
form: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 20,
  marginTop: 20,
},
input: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  paddingHorizontal: 10,
  paddingVertical: 5,
  marginRight: 10,
},
});

export default ToDoForm;