//AddItemScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuContext, MenuItem } from '../Context/menuContext';
import { Picker } from '@react-native-picker/picker';
import { commonStyles } from '../buttonStyles/commonStyles';


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
      <Text style={styles.welcomeText2}>Add New Dish</Text>
      <TextInput placeholder="Dish Name" value={dishname} onChangeText={setDishname} style={styles.menudetails} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.menudetails} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.menudetails} />
      <Picker selectedValue={course} onValueChange={(val) => setCourse(val)} style={styles.picker1}>
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      
      <TouchableOpacity style={commonStyles.button} onPress={handleAdd}>
      <Text style={commonStyles.buttonText}>Add Dish!</Text>
      </TouchableOpacity>



      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text>{item.dishname} ({item.course})</Text>
        <TouchableOpacity style={commonStyles.button} onPress={() => removeItem(item.id)}>
        <Text style={commonStyles.buttonText}>Remove</Text>
        </TouchableOpacity>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9c74f',
  },
  welcomeText2: {  
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 20,
    textAlign : 'center'
  },
  
  menudetails: { 
    width: '100%',
    borderWidth: 1,
    borderColor: '#ACE1AF',
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#A3C1D1',
    borderRadius: 10
  },
  
  picker1: {
    height: 50,
    width: '100%',
    backgroundColor: '#A3C1D1',
    color: '#fff',
    borderRadius: 10,
  },

  itemBox: {
    backgroundColor: '#ACE1AF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width:'100%'
 },
 button: {
  backgroundColor: '#ACE1AF',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10,
  marginTop: 15,
  width: '100%',
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
},

});
