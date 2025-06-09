FINAL POE MAST
🍽️ Christoffel Menu App
YouTube link : https://youtu.be/Y2QvfLPIqlg
The Christoffel Menu App is a React Native application built using TypeScript. It is designed to assist the chef Christoffel in managing the restaurant's menu efficiently. For this final Poe, the chef can:
•	Add new menu items by entering the dish name, description, course, and price.
•	View a dynamic list of all menu items.
•	Filter dishes by course (Starter, Main, Dessert).
•	See the total number of menu items and average prices per course on the home screen.
 Features
This app has three screens:
	HomeScreen
The HomeScreen serves as the main dashboard of the Christoffel Menu App. Its purpose is to:
•	Welcome the chef with a friendly interface.
•	Display key statistics such as:
o	Total number of dishes added.
o	Average price per course (starter, main, dessert).
•	Provide navigation buttons to :
o	Add new menu items (navigates to AddItemScreen).
o	Filter dishes by course (navigates to FilterCourseScreen).
•	Render a real-time list of all the added dishes using a scrollable interface, with each dish styled neatly using the MenuDetails component.
![Culinary_App hommescreen3](https://github.com/user-attachments/assets/04637efb-03af-4497-a1fb-8505af6aed53)
![Culinary_App homescreen1](https://github.com/user-attachments/assets/39f05820-e3ad-4d16-9498-34af325c9983)
![Culinary_App homescreen1](https://github.com/user-attachments/assets/c87ff30b-9dfa-4077-9702-41c2ad6c648e)

	 AddItemScreen
The AddItemScreen allows the chef to add new dishes to the menu by entering the following details:
•	Dishname
•	Description
•	Price
•	Course Category (Starter, Main, or Dessert – selected via a dropdown picker)
After submitting the form, the new dish is stored in an array and immediately becomes part of the overall menu. The user is then automatically navigated back to the HomeScreen, where the newly added dish is now visible in the menu list along with the total items and average price per course.
![Culinary_App additemscreen2](https://github.com/user-attachments/assets/f48a71c3-2441-46ee-808a-0807357fe1ab)
![Culinary_App additemscreen1](https://github.com/user-attachments/assets/3b2f4961-479d-41e6-8669-407e2271e0db)


	Filter Course Screen
The FilterCourseScreen allows the chef to filter the menu items by their course types such as Starter, Main, or Dessert. This screen helps the chef to quickly view only the dishes that belong to a specific course category without having to scroll through the entire list.
Additionally, it may include functionality to remove items directly from the filtered list or the second screen, making it a useful tool for menu organization and quick item management.
![Culinary_App filter screen](https://github.com/user-attachments/assets/86832f7f-445b-4713-941c-68a183bd79a8)


 Improvements made since part2
1.	Multi-Screen Navigation
o	Introduced react-navigation/native and @react-navigation/native-stack
o	Separated functionality into 3 screens: HomeScreen, AddItemScreen, FilterCourseScreen
2.	Centralized State Management
o	Created a MenuContext using React Context API
o	Menu items can be accessed and modified across all screens
3.	Custom Styling
o	Replaced default buttons with TouchableOpacity
o	Applied consistent custom styles including:
	Rounded buttons
	Styled text
4.	Data Handling Enhancements
o	Real-time average price calculation per course
o	Menu items immediately visible after addition or deletion
5.	Type Safety and Structure
o	Introduced RootStackParamList for safer navigation
o	Organized project into folders :
	Screens
	Components
	Context
6.	 Visual Enhancements
o	Added logo/image to HomeScreen
o	ScrollView for better user experience
o	Themed colors for consistent design



