import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Añadir tarea" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
  },
  deleteText: {
    color: 'red',
  },
});