import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {

  const [tasks, setTasks] = useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );
 
  const addTask = (newTask) => {
    if (!tasks.includes(newTask)) {
      setTasks(prevTasks => [...prevTasks, newTask]);
    } else {
      Alert.alert('Error', 'Task already exists.'); 
    }
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
};

export default App;