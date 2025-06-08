// screens/HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { MenuContext } from '../Context/menuContext';
import MenuItemCard from '../Components/menuItemCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
// At the top of screens/HomeScreen.tsx
import { RootStackParamList } from '../types';



type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
  route: RouteProp<RootStackParamList, 'HomeScreen'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { menuItems } = useContext(MenuContext)!;

  const averagePriceByCourse = (course: string) => {
    const filtered = menuItems.filter((item) => item.course === course);
    if (filtered.length === 0) return '0.00';
    const avg = filtered.reduce((sum, item) => sum + item.price, 0) / filtered.length;
    return avg.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ ChristOffel Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      <Text>Average Price - Starter: {averagePriceByCourse('starter')} ZAR</Text>
      <Text>Average Price - Main: {averagePriceByCourse('main')} ZAR</Text>
      <Text>Average Price - Dessert: {averagePriceByCourse('dessert')} ZAR</Text>

      <Button title="Add Item" onPress={() => navigation.navigate('AddItemScreen')} />
<Button title="Filter by Course" onPress={() => navigation.navigate('FilterCourseScreen')} />


      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
