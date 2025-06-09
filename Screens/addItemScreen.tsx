//imports for the first screen "AddItemScreen"
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuContext, MenuItem } from '../Context/menuContext';
import { Picker } from '@react-native-picker/picker';


// main function for this screen declared
export default function AddItemScreen() {
  const { menuItems, addItem, removeItem } = useContext(MenuContext)!;
  const [dishname, setDishname] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('starter');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
// OpenAI (2025) ChatGPT [Computer program]. 
// Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/(Accessed: 09 June 2025).

  // validate function
  const handleAdd = () => {
    if (!dishname || !description || !price) {
      setError('Please fill all fields');
      return;
    }
    setError('');

    addItem({
      id: Date.now().toString(),
      dishname,
      description,
      course,
      price: parseFloat(price), // convert string to number
    });

    // Clear fields after adding
    setDishname('');
    setDescription('');
    setPrice('');
    setCourse('starter');
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText2}>Add New Dish</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput placeholder="Dish Name" value={dishname} onChangeText={setDishname} style={styles.menudetails} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.menudetails} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.menudetails} />
      // Author: The Independent Institute of Education
      // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-

      <Picker selectedValue={course} onValueChange={(val) => setCourse(val)} style={styles.picker1}>
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      
      <TouchableOpacity style={styles.addbutton} onPress={handleAdd}>
      <Text style={styles.addbuttonText}>Add Dish!</Text>
      </TouchableOpacity>
      // OpenAI (2025) ChatGPT [Computer program]. 
      // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/(Accessed: 09 June 2025).


      <FlatList
      initialNumToRender={5}        //Improve performance for larger lists
      removeClippedSubviews={true}    
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
      <TouchableOpacity style={styles.removebutton} onPress={() => removeItem(item.id)}>
      <Text style={styles.removebuttonText}>Remove</Text>
      </TouchableOpacity>
      
        )}
      />
    </View>
  );
}
// OpenAI (2025) ChatGPT [Computer program]. 
// Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/(Accessed: 09 June 2025).

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
  errorText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
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
 addbutton: {
  backgroundColor: '#ACE1AF',
  paddingVertical: 12,
  paddingHorizontal: 30,
  borderRadius: 10,
  marginTop: 15,
  width: '100%',
  alignItems: 'center',
},
addbuttonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 18,
},
removebutton: {
  backgroundColor: '#FF6B6B',
  padding: 8,
  marginTop: 10,
  borderRadius: 8,
  alignItems: 'center',
  width: '50%',
  alignSelf: 'center',
},
removebuttonText: {
  color: '#fff',
  fontWeight: 'bold',
}


});
