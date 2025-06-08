// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuProvider } from './Context/menuContext';
import HomeScreen from './Screens/homeScreen';
import AddItemScreen from './Screens/addItemScreen';
import FilterCourseScreen from './Screens/filterCourseScreen';
import { RootStackParamList } from './types'; // 👈 Import the correct types

const Stack = createNativeStackNavigator<RootStackParamList>(); // 👈 Apply types

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
          <Stack.Screen name="FilterCourseScreen" component={FilterCourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
