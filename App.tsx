import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity , Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  
  //declaring variables with their updaters necessary for any change
  const [Dishname, setDishname] = useState ('');
  const [Description, setDescription] = useState ('');
  const [Course, setCourse] = useState('stater');
  const [price, setPrice] = useState('');
  // Author: The Independent Institute of Education
  // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-

  return (
    <View style={styles.Container}>

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
        <Picker.Item label="Stater" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
        </Picker>
        // OpenAI (2025) ChatGPT [Computer program]. 
        Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).
      </View>

      <TextInput style={styles.menudetails} 
      placeholder='Price:' placeholderTextColor="#e0f0ff" onChangeText={newText=> setPrice(newText)} value={price}
      keyboardType='numeric' />
      // OpenAI (2025) ChatGPT [Computer program]. 
      Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).

     // Button needed for saving and allowing the screen to display the list/menu created by the Chef
     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add items!</Text>
      </TouchableOpacity>
      // OpenAI (2025) ChatGPT [Computer program]. 
      Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/ (Accessed: 29 April 2025).

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // styling the big view/screen
  Container: {
    flex: 1,
    backgroundColor: '#f9c74f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  // styling the image part and its view for this app
  Picture: {
    paddingTop: 20, 
    justifyContent : 'center', 
    alignItems : 'center',
  },
  imageSize: {
    width : 500,
    height : 450,
    borderRadius: 10,
    marginBottom: 10
  },
  // styling all the text side of this app
  welcomeText: {
    paddingTop: 20,  
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
    textAlign : 'center'
  },
  menudetails: { 
    width: '100%',
    borderWidth: 1,
    borderColor: '#4d9de0',
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#4d9de0',
    borderRadius: 10
  },
  Viewcourse: {
    width: '100%',
    marginVertical: 10,
  },
  courselist: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#4d9de0',
    borderRadius: 10,
  },
  // styling all the text and button side of this app
  button: {
    backgroundColor: '#4d9de0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});
