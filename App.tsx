//importing React native component necessary for this app
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuProvider } from './Context/menuContext';
import HomeScreen from './Screens/homeScreen';
import AddItemScreen from './Screens/addItemScreen';
import FilterCourseScreen from './Screens/filterCourseScreen';
import { RootStackParamList } from './types';

//Component use in React native to switch between screens
const Stack = createNativeStackNavigator<RootStackParamList>();

//Main function of this app and screens declared with the entire navigation
export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer> 
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
          <Stack.Screen name="FilterCourseScreen" component={FilterCourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
// OpenAI (2025) ChatGPT [Computer program]. 
// Available at: https://chatgpt.com/c/680fa219-90fc-8004-8367-87687708a9be/(Accessed: 09 June 2025).

