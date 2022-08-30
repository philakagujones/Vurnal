import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import WorkoutsScreen from '../screens/Workouts';
import WGoalsScreen from '../screens/WGoals';
import WLevelsScreen from '../screens/WLevels';
import WorkoutsByGoalScreen from '../screens/WorkoutsByGoal';
import WorkoutsByLevelScreen from '../screens/WorkoutsByLevel';
import WorkoutDetailsScreen from '../screens/WorkoutDetails';
import Day1Screen from '../screens/Day1';
import Day2Screen from '../screens/Day2';
import Day3Screen from '../screens/Day3';
import Day4Screen from '../screens/Day4';
import Day5Screen from '../screens/Day5';
import Day6Screen from '../screens/Day6';
import Day7Screen from '../screens/Day7';
import ExercisesScreen from '../screens/Exercises';
import EquipmentsScreen from '../screens/Equipments';
import ExercisesByMuscleScreen from '../screens/ExercisesByMuscle';
import ExercisesByEquipmentScreen from '../screens/ExercisesByEquipment';
import EBodypartsScreen from '../screens/EBodyparts';
import ExerciseDetailsScreen from '../screens/ExerciseDetails';
import LogoutScreen from "../screens/Logout";
import DietsScreen from "../screens/Diets";
import DietsByCategoryScreen from "../screens/DietsByCategory";
import DietDetailsScreen from "../screens/DietDetails";
import PostsScreen from "../screens/Posts";
import PostDetailsScreen from "../screens/PostDetails";
import TagsScreen from "../screens/Tags";
import PostsByTagScreen from "../screens/PostsByTag";
import CategoriesScreen from "../screens/Categories";
import PostCommentsScreen from "../screens/PostComments";
import TermsScreen from '../screens/Terms';
import QuotesScreen from '../screens/Quotes';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import AboutUsScreen from '../screens/AboutUs';
import ContactUsScreen from '../screens/ContactUs';
import CalculatorScreen from '../screens/Calculator';
import BmiInfoScreen from '../screens/BmiInfo';
import ColorsApp from '../utils/ColorsApp';
import { Ionicons } from '@expo/vector-icons';
import Strings from '../utils/Strings';

var styles = require('../../assets/files/Styles');

const Stack = createStackNavigator();

export default function Logged(props){

  const {navigation} = props;

  const navigationOptions = {
    headerStyle: styles.headerStyle,
    headerBackTitle: null,
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold'
    },
    headerBackTitleVisible:false,
  }

const buttonLeft = () => {
  return (
    <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.arrowbackicon}/>
    )
};

return (
	<Stack.Navigator screenOptions={navigationOptions}>
	<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
	<Stack.Screen name="WorkoutsScreen" component={WorkoutsScreen} options={{title: Strings.ST1, headerLeft: () => buttonLeft()}}/>
	<Stack.Screen name="WGoalsScreen" component={WGoalsScreen} options={{title: Strings.ST10, headerLeft: () => buttonLeft()}}/>
	<Stack.Screen name="WLevelsScreen" component={WLevelsScreen} options={{title: Strings.ST11, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="WorkoutsByGoalScreen" component={WorkoutsByGoalScreen}/>
  <Stack.Screen name="WorkoutsByLevelScreen" component={WorkoutsByLevelScreen}/>
  <Stack.Screen name="WorkoutDetailsScreen" component={WorkoutDetailsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="Day1Screen" component={Day1Screen} options={{title: Strings.ST87, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day2Screen" component={Day2Screen} options={{title: Strings.ST88, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day3Screen" component={Day3Screen} options={{title: Strings.ST89, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day4Screen" component={Day4Screen} options={{title: Strings.ST90, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day5Screen" component={Day5Screen} options={{title: Strings.ST91, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day6Screen" component={Day6Screen} options={{title: Strings.ST92, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="Day7Screen" component={Day7Screen} options={{title: Strings.ST93, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="PostDetailsScreen" component={PostDetailsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="EquipmentsScreen" component={EquipmentsScreen} options={{title: Strings.ST38, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} options={{title: Strings.ST2, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="ExercisesByMuscleScreen" component={ExercisesByMuscleScreen}/>
  <Stack.Screen name="ExercisesByEquipmentScreen" component={ExercisesByEquipmentScreen}/>
  <Stack.Screen name="EBodypartsScreen" component={EBodypartsScreen} options={{title: Strings.ST37, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} options={{title: Strings.ST96, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="LogoutScreen" component={LogoutScreen}/>
  <Stack.Screen name="DietsScreen" component={DietsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="DietsByCategoryScreen" component={DietsByCategoryScreen}/>
  <Stack.Screen name="PostsScreen" component={PostsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="PostsByTagScreen" component={PostsByTagScreen}/>
  <Stack.Screen name="PostCommentsScreen" component={PostCommentsScreen} options={{title: Strings.ST84, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{title: Strings.ST41, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="TagsScreen" component={TagsScreen} options={{title: Strings.ST55, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="DietDetailsScreen" component={DietDetailsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="TermsScreen" component={TermsScreen} options={{title: Strings.ST82, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="QuotesScreen" component={QuotesScreen} options={{title: Strings.ST5, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title: Strings.ST6, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{title: Strings.ST7, headerLeft: () => buttonLeft()}}/>
  <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} options={{ headerShown: false }}/>
  <Stack.Screen name="BmiInfoScreen" component={BmiInfoScreen} options={{title: Strings.ST116, headerLeft: () => buttonLeft()}}/>
	</Stack.Navigator>
	)

}
