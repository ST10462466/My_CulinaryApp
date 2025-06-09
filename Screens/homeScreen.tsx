//imports for the first screen "homeScreen"
import React, { useContext } from 'react';
import { FlatList, Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { MenuContext } from '../Context/menuContext';
import MenuDetails from '../Components/menuDetails';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types'; 


// props that this screen receives are defined here : navigate and contain any parameter passed in here
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

// main function for this screen declared 
export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { menuItems } = useContext(MenuContext)!;

// average price function and calculation
  const averagePriceByCourse = (course: string) => {
    const filtered = menuItems.filter((item) => item.course === course);
    if (filtered.length === 0) return '0.00';
    const avg = filtered.reduce((sum, item) => sum + item.price, 0) / filtered.length;
    return avg.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

    // adjusting the image imported for the project
    <View style={styles.Picture}>
        <Image style={styles.imageSize}
        source={require('../img/culinaryapp.jpg')} />
      </View>
      // Author: The Independent Institute of Education
    // Mobile App Scripting MAST5112/p/w Module Manual 2025.,p20-

      // UI of this screen defined
      <Text style={styles.welcomeText}>🍽️ ChristOffel Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      <Text>Average Price - Starter: {averagePriceByCourse('starter')} ZAR</Text>
      <Text>Average Price - Main: {averagePriceByCourse('main')} ZAR</Text>
      <Text>Average Price - Dessert: {averagePriceByCourse('dessert')} ZAR</Text>

    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('AddItemScreen')}
    >
      <Text style={styles.buttonText}>Add Item!</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('FilterCourseScreen')}
    >
      <Text style={styles.buttonText}>Filter by Course</Text>
    </TouchableOpacity>

        
      // Display the list of items based on the input 
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuDetails item={item} />}
      />
      
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  
  // styling the main view of this screen
  container: {
    flex: 1,
    backgroundColor: '#f9c74f',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  // styling the image part and its view for this screen
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

 
  // styling the main text of this screen
  welcomeText: {  
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    marginVertical: 20,
    textAlign : 'center'
  },

  // styling the text and button side of this screen
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

