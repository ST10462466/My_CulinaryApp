import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
type MenuItem = {
  id: string;
  dishname: string;
  description: string;
  course: string;
  price: number;
}; // OpenAI (2025) ChatGPT [Computer program]. 
  // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 30 April 2025).



export default function App() {
  
  //declaring variables with their updaters necessary for any change
  const [Dishname, setDishname] = useState ('');
  const [Description, setDescription] = useState ('');
  const [Course, setCourse] = useState('stater');
  const [Price, setPrice] = useState('');
  const [MenuItems, setMenuItems] = useState<MenuItem[]>([]); // list of items
  // Author: The Independent Institute of Education
  // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-

  const handleAddItem = () =>{
    if (!Dishname || !Description || !Price) return;

    const newItem = {
      id: Date.now().toString(),
      dishname: Dishname,
      description: Description,
      course: Course,
      price: parseFloat(parseFloat(Price).toFixed(2))
    };

    setMenuItems([...MenuItems, newItem]);
    setDishname('');
    setDescription('');
    setCourse('starter');
    setPrice('');
  };
   // OpenAI (2025) ChatGPT [Computer program]. 
   // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 30 April 2025).
  

  return (
    <View style={styles.Container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

    // adjusting the image imported for the project
    <View style={styles.Picture}>
        <Image style={styles.imageSize}
        source={require('./img/culinaryapp.jpg')} />
      </View>
      // Author: The Independent Institute of Education
     // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-

      <Text style={styles.welcomeText}> 🍽️ ChristOffel Menu</Text>

      <TextInput style={styles.menudetails} placeholder='Dish Name:' placeholderTextColor="#e0f0ff" onChangeText={newText=> setDishname(newText)} />
      <TextInput style={styles.menudetails} placeholder='Description:' placeholderTextColor="#e0f0ff" onChangeText={newText=> setDescription(newText)} />
      // Author: The Independent Institute of Education
      // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-
      
      <View style={styles.Viewcourse}>

        <Text style={styles.courselist}> Choose a course: </Text>

        // Here is a picker to allow the Chef to choose a course of his choice
        <Picker style= {styles.picker}
        selectedValue={Course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
        </Picker>
        // OpenAI (2025) ChatGPT [Computer program]. 
        // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).
      </View>

      <TextInput style={styles.menudetails} 
      placeholder='Price:' placeholderTextColor="#e0f0ff" onChangeText={newText=> setPrice(newText)} value={Price}
      keyboardType='numeric' />
      // OpenAI (2025) ChatGPT [Computer program]. 
      // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).

     // Button needed for saving and allowing the screen to display the list/menu created by the Chef
     <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text style={styles.buttonText}>Add items!</Text>
      </TouchableOpacity>
      // OpenAI (2025) ChatGPT [Computer program]. 
      // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).

      // Display Total Items 
      <Text style={styles.totalText}> Total Items: {MenuItems.length}</Text>

      // Display the list of items based on the input 
      <FlatList 
      data={MenuItems}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>{item.dishname} ({item.course})</Text>
            <Text style={styles.menuSubText}>{item.description}</Text>
            <Text style={styles.menuSubText}>{item.course}</Text>
            <Text style={styles.menuPrice}>{item.price.toFixed(2)} ZAR</Text>
        </View>
      )}
      contentContainerStyle={styles.listContainer} // This ensures padding and spacing around the list
      scrollEnabled={false} // prevent nested scroll conflict
      />
      // OpenAI (2025) ChatGPT [Computer program]. 
      // Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 30 April 2025).

      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // styling the big view/screen
  Container: {
    flex: 1,
    backgroundColor: '#f9c74f',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  // styling the image part and its view for this app
  Picture: { 
    justifyContent : 'center', 
    alignItems : 'center',
  },
  imageSize: {
    width : 300,
    height : 250,
    borderRadius: 10,
    marginBottom: 10
  },
  // styling all the text side of this app
  welcomeText: {  
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
  Viewcourse: {
    width: '100%',
    marginVertical: 8,
  },
  courselist: {
    fontSize: 16,
    marginBottom: 4,
    color: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#A3C1D1',
    color: '#fff',
    borderRadius: 10,
  },
  
  // styling all the text and button side of this app
  button: {
    backgroundColor: '#ACE1AF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 15,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  // styling  every detail regarding items
  totalText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width:'100%'
  },
  menuText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  menuSubText: {
    color: '#333',
    marginTop: 5
  },
  menuPrice: {
    color: '#4d9de0',
    fontWeight: 'bold',
    marginTop: 5
  },
  listContainer: {
    width: '100%',
    paddingVertical: 20,
  },
});
