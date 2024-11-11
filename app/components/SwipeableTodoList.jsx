import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function SwipeableTodoList() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Tarea 1' },
    { id: '2', text: 'Tarea 2' },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={() => (
            <Button title="Eliminar" onPress={() => deleteTask(item.id)} />
          )}
        >
          <View style={styles.task}>
            <Text>{item.text}</Text>
          </View>
        </Swipeable>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 20,
    borderBottomWidth: 1,
  },
});