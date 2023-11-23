import React, { useState } from 'react';
import { Alert, SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


function Home({ navigation }) {

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
      <MainLayout>
        <SafeAreaView>
           <ToDoList tasks={tasks}/>
           <ToDoForm addTask={addTask}/>
           <Button title="Go to About" onPress={() => navigation.navigate('About')}/>
        </SafeAreaView>
    </MainLayout>
    );
}

export default Home;