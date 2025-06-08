// screens/AddItemScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { MenuContext, MenuItem } from '../Context/menuContext';
import { Picker } from '@react-native-picker/picker';


export default function AddItemScreen() {
  const { menuItems, addItem, removeItem } = useContext(MenuContext)!;
  const [dishname, setDishname] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('starter');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!dishname || !description || !price) return;
    addItem({
      id: Date.now().toString(),
      dishname,
      description,
      course,
      price: parseFloat(price),
    });
    setDishname('');
    setDescription('');
    setPrice('');
    setCourse('starter');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Dish</Text>
      <TextInput placeholder="Dish Name" value={dishname} onChangeText={setDishname} style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Picker selectedValue={course} onValueChange={(val) => setCourse(val)} style={styles.input}>
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      <Button title="Add Dish" onPress={handleAdd} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text>{item.dishname} ({item.course})</Text>
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
  input: { borderBottomWidth: 1, marginVertical: 10 },
  itemBox: { marginVertical: 5, padding: 10, backgroundColor: '#eee' },
});
