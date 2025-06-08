// screens/FilterCourseScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { MenuContext } from '../Context/menuContext';
import { Picker } from '@react-native-picker/picker';


export default function FilterCourseScreen() {
  const { menuItems, removeItem } = useContext(MenuContext)!;
  const [selectedCourse, setSelectedCourse] = useState('starter');

  const filtered = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker}>
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text>{item.dishname}</Text>
            <Button title="Remove" onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  picker: { marginVertical: 10 },
  itemBox: { padding: 10, backgroundColor: '#eee', marginVertical: 5 },
});
