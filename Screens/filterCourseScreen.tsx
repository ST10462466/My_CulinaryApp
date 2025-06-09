//imports for the first screen "FilterCourseScreen"
import React, { useState, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { MenuContext } from '../Context/menuContext';
import { Picker } from '@react-native-picker/picker';


export default function FilterCourseScreen() {
  const { menuItems, removeItem } = useContext(MenuContext)!;
  const [selectedCourse, setSelectedCourse] = useState('starter');

  // Filters the full list of menu items so only items matching the selected course are shown.
  const filtered = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText3}>Filter by Course</Text>
      <Picker selectedValue={selectedCourse} onValueChange={setSelectedCourse} style={styles.picker2}>
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
  container: {
    flex: 1,
    backgroundColor: '#f9c74f',
  },

  welcomeText3: {  
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 20,
    textAlign : 'center'
  },
  picker2: {
    height: 50,
    width: '100%',
    backgroundColor: '#A3C1D1',
    color: '#fff',
    borderRadius: 10,
  },
  itemBox: { 
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width:'100%'
 },
});
